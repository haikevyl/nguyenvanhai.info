import os
import time

from selenium import webdriver

chromedriver = "/usr/local/bin/chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(chromedriver)
print("getlink vlxx")

url = input("link page...\n")

#get link post
list_href = []
driver.get(url)
elements =driver.find_elements_by_css_selector('li.video-list a')
for el in elements:
	href = el.get_attribute("href")
	list_href.append(href)
print(list_href)


print("=======================================")
# get link video
results = ""
for link in list_href:
	driver.get(link)
	time.sleep(5)
	videoEl =driver.find_elements_by_css_selector('video.jw-video')
	for el in videoEl:
		src = el.get_attribute('src')
		print(src)
		results += src + "\n"

#write results to file link.txt
f = open("link.txt", mode="w")
data = f.write(results)
f.close()

#close chrome
driver.close()
