#!/bin/sh
cwd=$(pwd)
cd widget-proxy
sudo docker build . -t sametime-widget-proxy
cd $cwd
