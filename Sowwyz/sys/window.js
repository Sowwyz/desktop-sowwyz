const { app, BrowserWindow, globalShortcut } = require('electron')
const uiLocation = "login.html";

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
      center: true,
      fullscreen: true,
      alwaysOnTop: true,
      title: 'Grathium UI',
      icon: __dirname + '/favicon.png',
      webPreferences:{
        plugins: true,
        nodeIntegration: false,
        show: false
      }
  });

  // and load the index.html of the app.
  win.loadFile(uiLocation)
}

function createGlobalShortcut() {
    const homekey = "CommandOrControl+H";
    globalShortcut.register(homekey, () => {
        win.loadFile(uiLocation);
    });

    console.log(
        "Homepage Set to: " + homekey,
        globalShortcut.isRegistered(homekey)
    );
}

app.on("ready", () => {
  createWindow();
  createGlobalShortcut();
});


// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
