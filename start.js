const { app, BrowserWindow, Tray, Menu } = require("electron");

const path = require("path");
const url = require("url");

let window;
let isQuiting;
let tray;

app.on("before-quit", function () {
  isQuiting = true;
});

function createWindow() {

  tray = new Tray(path.join(__dirname, "src/assets/tray.png"));

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Mostrar aplicativo",
        click: function () {
          window.show();
        },
      },
      {
        label: "Sair",
        click: function () {
          isQuiting = true;
          app.quit();
        },
      },
    ])
  );

  window = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 700,
    minHeight: 700,
    show: true,
    frame: false,
    darkTheme: true,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });

  window.on("close", function (event) {
    if (!isQuiting) {
      event.preventDefault();
      window.hide();
      event.returnValue = false;
    }
  });

  window.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/build/index.html"),
        protocol: "file:",
        slashes: true,
      })
  );
}

app.on("before-quit", () => {
  isQuiting = true;
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on(
  "window-all-closed",
  () => process.platform !== "darwin" && app.quit() // "darwin" targets macOS only.
);
