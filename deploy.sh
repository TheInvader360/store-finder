#!/bin/bash
sudo rm -rf /var/lib/tomcat7/webapps/*
sudo cp -a ~/Workspace/finder/ /var/lib/tomcat7/webapps/finder/
sudo service tomcat7 restart
