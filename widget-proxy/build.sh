#!/bin/sh
cwd=$(pwd)
sudo docker build . -t sametime-widget-proxy
cd $cwd
