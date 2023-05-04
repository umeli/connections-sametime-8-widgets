# Widget Sample

## Requirements

Working node/npm installation

## prepare

- Clone the repo
- cd into directory
- run "npm install"

## Build

- run "npm run build:anon"
- transfer the dist/my-meetings/ to docnx:/opt/HTTPServer/htdocs/
Shortcut:

 ```sh
  npm run build:anon && scp -r ./dist/my-recordings/ docnx:/opt/HTTPServer/htdocs/widgets/
```

or 

```sh
  npm run build:prod  && scp -r ./dist/my-recordings/ docnx:/opt/HTTPServer/htdocs/widgets/
```

## Code Description

Main Widget Component src/app/app.component.ts and src/app/app.component.html
