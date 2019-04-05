const electron = require('electron')
const {app, BrowserWindow} = electron

//initial load
app.on('ready', () => {

    //renders window
    let win = new BrowserWindow({
        width:900, 
        height:631, 
        minWidth: 900,
        minHeight: 631,
        frame:false
    })

    //loads index.html page onto  
    win.loadURL(`file://${__dirname}/index.html`)

    // DEV TOOLS
    //win.webContents.openDevTools()
})

exports.openWindow = (filename) => {

    //

    //renders window
    let win = new BrowserWindow({width:800, height:600})

    //loads another <filename>.html
    win.loadURL(`file://${__dirname}/` + filename + `.html`)
}