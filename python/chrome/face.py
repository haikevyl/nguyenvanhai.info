import os
import time

from selenium import webdriver

chromedriver = "/usr/local/bin/chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(chromedriver)

email = "nguyenhai11a4@gmail.com"
pas = "Hai@Nguyen@23101998@Ngoc" 

driver.get("https://m.facebook.com/")
inputEmail = driver.find_elements_by_css_selector('input#m_login_email')
inputEmail[0].send_keys(email)

inputPass = driver.find_elements_by_css_selector('input#m_login_password')
inputPass[0].send_keys(pas)

time.sleep(5)

driver.find_elements_by_css_selector('button[name="login"]')[0].click()

time.sleep(10)

driver.get("https://m.facebook.com/friends/center/suggestions/")

# els = driver.find_elements_by_css_selector('button[value="Thêm bạn bè]')

# print(len(els))