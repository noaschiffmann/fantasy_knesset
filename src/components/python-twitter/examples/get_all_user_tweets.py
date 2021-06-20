#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Downloads all tweets from a given user.

Uses twitter.Api.GetUserTimeline to retreive the last 3,200 tweets from a user.
Twitter doesn't allow retreiving more tweets than this through the API, so we get
as many as possible.

t.py should contain the imported variables.
"""

from __future__ import print_function
import json
import twitter
import re
from t import ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET, CONSUMER_KEY, CONSUMER_SECRET
from datetime import datetime
import codecs
from pathlib import Path

twitters=["naftalibennett", "MeravMichaeli", "yairlapid", "tamarzandberg", "gantzbe", "Ayelet__Shaked", "AvigdorLiberman"
          , "netanyahu", "itamarbengvir", "bezalelsm", "AmirOhana", "regev_miri", "ariyederi", "zoharm7", "YoavKisch"
          ,"dudiamsalem", "ShahadehAbou", "ofercass", "EsawiFr", "Efratrayten1", "KarivGilad", "BToporovsky",
          "YRazvozov", "YSegalovitz", "Ram_Ben_Barak", "cohen_meirav", "OrnaBarb", "gidonsaar", "KElharrar", "omerbarlev"]

def get_tweets(api=None, screen_name=None):
    timeline = api.GetUserTimeline(screen_name=screen_name, count=50)
    earliest_tweet = min(timeline, key=lambda x: x.id).id
    #print("getting tweets before:", earliest_tweet)

    # while True:
    #     tweets = api.GetUserTimeline(
    #         screen_name=screen_name, max_id=earliest_tweet, count=500
    #     )
    #     new_earliest = min(tweets, key=lambda x: x.id).id
    #
    #     if not tweets or new_earliest == earliest_tweet:
    #         break
    #     else:
    #         earliest_tweet = new_earliest
    #         print("getting tweets before:", earliest_tweet)
    #         timeline += tweets

    return timeline

def date_creator(x):
    str=''
    days=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"
          ,"20","21","22","23","24","25","26","27","28","29","30","31"]
    years=['2021', '2022', '2023', '2024', '2025']
    for i in x:
        if i=="Jan":
            str+="01-"
        elif i=="Feb":
            str+="02-"
        elif i=="Mar":
            str+="03-"
        elif i=="Apr":
            str+="04-"
        elif i=="May":
            str+="05-"
        elif i=="Jun":
            str+="06-"
        elif i=="Jul":
            str+="07-"
        elif i=="Aug":
            str+="08-"
        elif i=="Sep":
            str+="09-"
        elif i=="Oct":
            str+="10-"
        elif i=="Nov":
            str+="11-"
        elif i=="Dec":
            str+="12-"
        elif i in days:
            str+=(i+'-')
        elif i in years:
            str+=(i+' ')
        else:
            str+=i
    return str

if __name__ == "__main__":
    api = twitter.Api(
        CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET
    )
    all_tweets = []
    date_pattern = re.compile(r'(\w{3})( )(\w{3})( )(\d{2})( )(\d{2}:\d{2}:\d{2})( )(\+0000)( )(2\d{3})')
    text_pattern = re.compile(r'(.*)(https:\/\/t\.co\/)(.*)')
    hour_pattern = re.compile(r'(..:..:..)')
    date_lst=[]
    count=0
    final_dict={}
    for i in twitters:
        timeline = get_tweets(api=api, screen_name=i)
        for j in timeline:
            if j.user.screen_name==i and j.quoted_status is None and text_pattern.match(j.text) is not None:
                inner_dict={}
                tweet_date=date_creator(date_pattern.match(j.created_at).group(5,3,11,7))
                hour=hour_pattern.findall(j.created_at)[0]
                date=datetime.strptime(tweet_date, "%d-%m-%Y %H:%M:%S")
                date_lst.append(date)
                tweet_text = text_pattern.match(j.text).group(1)
                inner_dict["hour"]=hour
                inner_dict["text"]=tweet_text
                inner_dict["username"]=j.user.name
                inner_dict["img"]=j.user.profile_image_url
                final_dict[str(date)]=inner_dict
    sorted_dates=sorted(date_lst)[::-1]
    for i in sorted_dates:
        if final_dict[str(i)]["text"] != "":
            all_tweets.append(final_dict[str(i)])
            count+=1
        if count==3:
            break
    base = Path('src/components/python-twitter')
    jsonpath = base / ("tweets.json")
    with open(jsonpath, 'w+') as f:
        json.dump(all_tweets, f, indent=4)