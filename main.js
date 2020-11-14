console.log("Main Process working")
const electron = require('electron'); 
const app = electron.app;
const BrowserWindow  = electron.BrowserWindow;
const path = require('path');
const url = require('url'); 

let win;

function createWindow(){
  win = new BrowserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file', // we using html content from file on disk not on http/s so protocol is file
    slashes: true
  }));
  // ***OPEN DEV TOOLS***
  // win.webContents.openDevTools();
  win.on('closed', () => {
    win = null; // win object can now be  collected by GC
  })  
}

app.on('ready', createWindow)
