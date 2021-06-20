from apscheduler.schedulers.blocking import BlockingScheduler
from HakDictBuild import hak_dict, hak_name_dict
from KnessetScraper import scraper
from QueriesScraper import hak_queries
from PythonTwitter import examples as e


sched = BlockingScheduler()
dic=hak_dict # id dict
name_dic=hak_name_dict

@sched.scheduled_job('cron', day_of_week='sun', hour='7-20')
def timed_job_attendance_sunday():
    dic=scraper(dic)

@sched.scheduled_job('cron', day_of_week='mon-thu', hour='7-20')
def timed_job_attendance():
    dic=scraper(dic)

@sched.scheduled_job('cron', day_of_week='thu', hour=19)
def scheduled_job_queries_thursday():
    name_dic=hak_queries(name_dic) # send dict to backend
    name_dic-hak_name_dict # initialize dict

@sched.scheduled_job('cron', day_of_week='mon-sun', hour='5-23')
def scheduled_job_tweets():
    e.get_all_user_tweets.main()

@sched.scheduled_job('cron', day_of_week='sun', hour=21)
def timed_job_attendance_daily_sunday():
    dic=scraper(dic) # send dict to backend
    dic=hak_dict # initialize dict

@sched.scheduled_job('cron', day_of_week='mon-thu', hour=21)
def timed_job_attendance_daily():
    dic=scraper(dic) # send dict to backend
    dic=hak_dict # initialize dict

sched.start()