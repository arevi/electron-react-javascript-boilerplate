import { app, BrowserWindow } from 'electron';

let mainWindow = null;
const isDev = process.env.ELECTRON_ENV == 'dev' ? true : false;

//Render main window w/ configuration settings
const renderWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev
    }
  });

  // Depending on the environment the frontend will either load from the react server or the static html file
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000/');
  } else {
    mainWindow.loadFile('./build/index.html');
  }

  // Detect if devtools was somehow opened outside development
  mainWindow.webContents.on('devtools-opened', () => {
    if (!isDev) {
      mainWindow.webContents.closeDevTools();
    }
  });
};

app.on('ready', renderWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    renderWindow();
  }
});
