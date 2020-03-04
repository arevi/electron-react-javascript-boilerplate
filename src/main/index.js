import { app, BrowserWindow } from 'electron';

let mainWindow = null;

//Render main window w/ configuration settings
const renderWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    center: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('./index.html');
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
