#!/bin/sh
cwd=$(pwd)

if [ ! -d "dist/my-meetings" ]; then
    mkdir -p dist/my-meetings
fi
if [ ! -d "dist/my-recordings" ]; then
    mkdir -p dist/my-recordings
fi

echo "compile meeting widget"
cd $cwd/my-sametime-meetings
npm run build:prod
if [ -d "$cwd/my-sametime-meetings/dist" ]; then
    echo "Move compiled files"
    mv $cwd/my-sametime-meetings/dist/* $cwd/dist/my-meetings/
fi 
echo "compile recording widget"
cd $cwd/my-sametime-recordings
npm run build:prod
if [ -d "$cwd/my-sametime-recordings/dist" ]; then
    mv $cwd/my-sametime-recordings/dist/* $cwd/dist/my-recordings/
fi

echo "done. The result should now be in $cwd/dist"


