#!/bin/sh
SAMETIME="dosam.collab.cloud"
sudo docker stop sametime-proxy
sudo docker rm sametime-proxy
sudo docker run -p 3000:3000 --name="sametime-proxy" -e "DEBUG=express:*" \
-e "SAMETIME_HOST=$SAMETIME" \
-e "PROXY_DEBUG=debug" \
sametime-widget-proxy 


