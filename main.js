const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    title: "Mainul's Hunting",
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    backgroundColor: '#08090d',
    show: false,
  });

  win.loadFile('index.html');
  win.once('ready-to-show', () => win.show());

  // Open mailto links in default mail client
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('mailto:') || url.startsWith('http')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (e, url) => {
    if (url.startsWith('mailto:')) {
      e.preventDefault();
      shell.openExternal(url);
    }
  });

  // Simple menu
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: "Mainul's Hunting",
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => win.reload() },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
      ]
    }
  ]));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
