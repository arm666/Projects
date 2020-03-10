from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome('./chromedriver.exe')
driver.get('https://unsplash.com/')
srch = driver.find_element_by_xpath('/html/body/div/div/div[4]/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div[2]/form/div/input')
srch.send_keys("click")
time.sleep(3.0)
print(driver.find_element_by_xpath('//*[@id="app"]/div/div[4]/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div[2]/form/button'))
driver.find_element_by_xpath('//*[@id="app"]/div/div[4]/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div[2]/form/button').click()
time.sleep(2)

link1 = '/html/body/div/div/div[3]/div[3]/div/div[1]/div/div/div[1]/div[1]/figure/div/div[1]/div/a/div/img'
dwn = '/html/body/div[2]/div/div/div[4]/div/div/div[1]/div[1]/header/div[2]/div[3]/a'
time.sleep(1)
driver.find_element_by_xpath(link1).click()
time.sleep(1)
driver.find_element_by_xpath(dwn).click()