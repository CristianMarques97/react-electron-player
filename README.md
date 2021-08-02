# react-electron-player

Aplicação de player com React e Electron

# build commands

start electron desktop app (DEV) -> npm start<br/>
build windows package -> npm run build:windows<br/>
build linux package -> npm run make<br/>
build macOS package -> npm run make-mac<br/>

# Build test server

1- install http-server: npm i -g http-server<br/>
2- Run: npx http-server <folder_to_host> --cors=Authorization<br/>

# Playlist folder example

![image](https://user-images.githubusercontent.com/46373143/127787660-b0d97bb5-4d71-43e2-9205-628212623ad8.png)

# playlist.json example

![image](https://user-images.githubusercontent.com/46373143/127787675-9d7c411c-0bfb-4558-b79c-9f3b5ce24740.png)

# playlist.json boilerplate

{
"name": "",
"description": "",
"musics": [
{
"file": "",
"name": "",
"duration": "",
"author": "",
"album": "",
"year": "",
"thumbnail": ""
}
]
}
