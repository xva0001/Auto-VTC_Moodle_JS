import os
from selenium import webdriver
from selenium.webdriver.common.by import By
import re
import time
password = ""
username = ""
opt = webdriver.EdgeOptions()
opt.add_experimental_option("detach",True)

driver = webdriver.Edge(options=opt)

driver.get("https://moodle2324.vtc.edu.hk/auth/saml2/login.php")

time.sleep(2)

usrIn = driver.find_element(by=By.ID,value="userNameInput")
usrIn.send_keys(username)
usrInp = driver.find_element(by=By.ID,value="passwordInput")
usrInp.send_keys(password)
usrInbtn = driver.find_element(by=By.ID,value="submitButton")
usrInbtn.click()
