from bs4 import BeautifulSoup
import requests
import time
import re
import codecs
import scrapy
from urllib.parse import unquote
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import datetime
from selenium.webdriver.common.by import By
from HakDictBuild import hak_dict


option = webdriver.ChromeOptions()
option.add_argument('--disable-blink-features=AutomationControlled')
url_queries='https://main.knesset.gov.il/Activity/plenum/Pages/Questions.aspx'
driver=webdriver.Chrome('/Users/raananv/Desktop/fantasy_knesset/chromedriver', options=option)
driver.get(url_queries)
time.sleep(10)

def hak_queries(hak_dict):
    queries= driver.find_elements(By.CLASS_NAME, 'rgRow')
    queries2= driver.find_elements(By.CLASS_NAME, 'rgAltRow')
    haks=[]
    for i in queries:
        elem=i.find_elements(By.CLASS_NAME, 'QTd')
        count = 0
        for j in elem:
            if count <= 2:
                pass
            elif count==3:
                pass #topic
            elif count==4:
                if j.text not in haks:
                    haks.append(j.text)
                    if j.text in hak_dict.keys():
                        hak_dict[j.text] += 3
            count+=1
    for i in queries2:
        elem=i.find_elements(By.CLASS_NAME, 'QTd')
        count2 = 0
        for j in elem:
            if count2 <= 2:
                pass
            elif count2==3:
                pass #topic
            elif count2==4:
                if j.text not in haks:
                    haks.append(j.text)
                    if j.text in hak_dict.keys():
                        hak_dict[j.text] += 3
            count2+=1
    return hak_dict
