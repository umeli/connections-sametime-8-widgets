#!/bin/sh
./stop.sh
sudo docker system prune -a

cwd=$(pwd)
cd widget-proxy
sudo docker build . -t sametime-widget-proxy
cd $cwd/recording-widget
sudo docker build . -t sametime-recording-proxy
cd $cwd
