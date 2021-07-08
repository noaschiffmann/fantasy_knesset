import React from 'react';
import {Line} from 'react-chartjs-2';
import current_user from '../important/current_user.json';
import all_users from '../important/all_users.json';


function setLabels(){
  let points_array = []
  for (let i in all_users){
    if (all_users[i].username === current_user.user_name){
      points_array = all_users[i].points;
      break;
    }
  }
  let labels = [];
  const current_day = new Date();
  for (let i in points_array){
    let tmp = new Date()
    tmp.setDate(current_day.getDate() - (points_array.length - i)) 
    labels.push(tmp.toLocaleDateString())
  }
  return {"labels":labels,"points":points_array};
}

const state = {
  labels: setLabels()["labels"],
  datasets: [
    {
      label: 'Points',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#144569',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: setLabels()["points"]
    }
  ]
}



const profileGraph = () => {
    return (
        <div>
        <Line
            data={state}
            options={{
            title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
            }}
        />
        </div>
    );
}

export default profileGraph;