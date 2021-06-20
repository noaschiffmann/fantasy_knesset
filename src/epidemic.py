from random import random, choice
import shapefile
import networkx as nx


class Building:
    geometry = None # list of coordinates
    
    def __init__(self, geometry):
        self.geometry = geometry
    
    def dist(self, n): # compute the distance between buildings and another building n
        # Euclidean distance - sqare root of (squared x differece + squared y difference)
        return ((self.geometry[0] - n.geometry[0])**2 + (self.geometry[1] - n.geometry[1])**2)**0.5
        
        
class Agent:
    # agent characteristics
    status = None # infection status
    location = None # building
    home = None # building of residence
    social_status = None # social status value
    utility_value = None # minimum utility value

    # initialize agent
    def  __init__(self, status, location, social_status, utility_value):
        self.status = status
        self.location = location
        self.home = location
        self.social_status = social_status
        self.utility_value = utility_value
        
    def compute_utility(self, agent):
        distances = [self.location.dist(f.location) for f in model.network.neighbors(self)]
        max_distance = max(distances)
        max_social_dist = self.social_status
        if self.social_status < 0.5:
            max_social_dist = abs(1 - self.social_status)
        if max_distance > 0:
            norm_distance = self.location.dist(agent.location) / max_distance # normalize distance by max distance
        else:
            norm_distance = 0
        # normalize social distance by maximal social difference
        norm_social_distance = abs(self.social_status - agent.social_status) / max_social_dist
        # compute utility - w1 * (1 - normalized distance) + (1 - w1) * (1 - normaized social distance)
        utility = model.w1 * (1 - norm_distance) + (1 - model.w1) * (1 - norm_social_distance)
        return utility
    
    def find_destination(self): # find location to move to
        if self.location != self.home: # if not at home - go back go home
            return self
        
        # find neighbors that produce enough utility
        candidates = [f for f in model.network.neighbors(self) if self.compute_utility(f) >= self.utility_value]    
        
        if len(candidates) > 0:
            friend = choice(candidates) # choose a random candidate
            return friend
        return None
        
    # agent action
    def step(self):
        if 1<= self.status <= model.time_to_recover: # if agent if infected
            self.location = self.home # mae sure agent is at home
            self.status += 1 # increase status by 1
        else: # meet friends
            friend = self.find_destination()
            if friend is not None:
                new_location = friend.location
                self.location = new_location # move agent to new location
            # identify agents in current location
            choice_set = [a for a in model.network.nodes if self.location == a.location]
            if len(choice_set) > 0:
                a = choice(choice_set) # randomly choose an agent
                if self.status == 0 and 1 <= a.status <= model.time_to_recover: # if a is infected
                    self.status = 1 # infect agent


class Model:
    time_to_recover = None # number of steps until an infected agents becomes immuned
    w1 = None # weight for physical distance
    
    network = None
    buildings = None
    t = None
    infected = None
    
    def __init__(self, time_to_recover, w1, connections, shape):
        self.time_to_recover = time_to_recover
        self.w1 = w1
        self.connections = connections
        self.network = nx.Graph() # create a network element
        self.buildings = []
        
        shp = shapefile.Reader(shape) # read shapefile
        for i in range(len(shp.records())): # iterate through records
            self.buildings.append(Building(shp.shape(i).points[0])) # append building with geometry
            agent = Agent((random() < 0.05) * 1, self.buildings[-1], random(), random()) # create agent in building
            self.network.add_node(agent) # add agent as node to the network
        
        for a in self.network.nodes: # for every agent = for every node
            candidates = [f for f in self.network.nodes if f != a] # find all agents that are not a
            distances = [a.location.dist(f.location) for f in candidates] # compute distance from agents
            sorted_distances = sorted(distances) # sort distances from lowest to highest
            ranks = [sorted_distances.index(d) for d in distances] # get a rank score for each distance
            # choose only agents whose rank is lower than connections
            friends = [candidates[i] for i in range(len(candidates)) if ranks[i] < connections]
            for f in friends:
                self.network.add_edge(a, f) # add an edge to the network between agent and friend
        
        self.t = 1
        self.infected = len([a for a in self.network.nodes if 1 <= a.status <= self.time_to_recover])
    
    def run(self):
        while self.infected > 0: # stop rule of simulation - no more infected cells
            
            # iterate over all agents
            for a in self.network.nodes:
                a.step()
    
            # compute number of infected agents
            self.infected = len([a for a in self.network.nodes if 1 <= a.status <= self.time_to_recover])
            print(self.t, self.infected)
            self.t += 1


time_to_recover = 12
shape = 'bldgs_points'
for connections in range(4, 17, 4):
    for w1 in range(1, 10, 4):
        for i in range(10):
            model = Model(time_to_recover, w1/10, connections, shape)
            model.run()