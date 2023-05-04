#!/bin/sh
sudo docker stop sametime-proxy-debug
sudo docker rm sametime-proxy-debug
sudo docker run -p 3001:3001 --name "sametime-proxy-debug" -it sametime-widget-proxy   /bin/sh 


