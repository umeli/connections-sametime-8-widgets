#!/bin/sh
sudo docker stop sametime-proxy
sudo docker rm sametime-proxy
sudo docker run -p 3001:3000 --name="sametime-proxy" -e "DEBUG=express:*" sametime-widget-proxy


