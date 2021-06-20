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

week_ago=str(datetime.datetime.now() - datetime.timedelta(7)).split()[0].split('-')
week_ago_day=week_ago[2]
week_ago_month=week_ago[1]
week_ago_year=week_ago[0]

url_attendance='https://main.knesset.gov.il/mk/Pages/Current.aspx?pg=mkpresence'
queries=codecs.open("/Users/raananv/Desktop/fantasy_knesset/src/components/queries.html", 'r', 'utf-8').read()
url_votes='https://www.knesset.gov.il/vote/heb/vote_res_list.asp'
url_queries='https://main.knesset.gov.il/Activity/plenum/Pages/Questions.aspx'

option = webdriver.ChromeOptions()
option.add_argument('--disable-blink-features=AutomationControlled')
driver=webdriver.Chrome('/Users/raananv/Desktop/fantasy_knesset/chromedriver', options=option)
driver.get(url_attendance)
time.sleep(10)
presence= driver.find_elements(By.CLASS_NAME, 'MKLobbyPhotoItemNarrow')

def scraper(hak_dict):
    count=1
    all_haks = []
    for p in presence:
        name_div = p.find_elements_by_class_name('MKLobbyMKNameDivNarrow')
        name = name_div[0].find_element(By.TAG_NAME, 'a').text
        photo=p.find_elements_by_class_name('MKLobbyPhotoDivNarrow')
        img_src=photo[0].find_element(By.TAG_NAME, 'img').get_attribute("src")
        hak_pattern = re.compile(r'(https:\/\/fs\.knesset\.gov\.il\/globaldocs\/MK\/)(\d+)(\/)(.*)')
        hak_id=hak_pattern.findall(img_src)[0]
        hak_id=list(hak_id)[1]
        all_haks.append(hak_id)
        non_attendance = photo[0].find_elements(By.CLASS_NAME, 'notPresence')
        if non_attendance != []:
            pass
        else:
            hak_dict[hak_id] += 1
        count += 1
        if count > 120:
            break
    return hak_dict