#!/bin/sh
cwd=$(pwd)
timestamp=$(date +%d-%m-%Y_%H-%M-%S)
if [ ! -d "$cwd/dist" ]; then
    mkdir $cwd/dist
fi
if [ -d "$cwd/dist/my-meetings" ]; then
    
    rm -rf $cwd/dist/my-meetings
fi
if [ -d "$cwd/dist/my-recordings" ]; then
    rm -rf $cwd/dist/my-recordings    
fi

echo "compile meeting widget"
cd $cwd/my-sametime-meetings
npm install
npm run build:prod
if [ -d "$cwd/my-sametime-meetings/dist" ]; then
    echo "Move compiled files"
    mv $cwd/my-sametime-meetings/dist/* $cwd/dist/my-meetings/
fi 
echo "compile recording widget"
cd $cwd/my-sametime-recordings
npm install
npm run build:prod
if [ -d "$cwd/my-sametime-recordings/dist" ]; then
    mv $cwd/my-sametime-recordings/dist/* $cwd/dist/my-recordings/
fi
if [ -d "$cwd/dist" ]; then
    echo "compress result"
    cd $cwd/dist
    zip -rm $cwd/SametimeWidgets-$timestamp.zip *
fi

echo "done. The result should now be in $cwd/SametimeWidgets-$timestamp.zip"


