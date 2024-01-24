import path from 'node:path';

import { app, BrowserWindow, Menu, ipcMain, shell } from 'electron';
import os from 'os';
import fs from 'fs';

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let mainWindow: BrowserWindow | null;
let aboutWindow: BrowserWindow | null;

const createMainWindow = (): void => {
	mainWindow = new BrowserWindow({
		title: 'second-electron-app',
		width: isDev ? 1000 : 500,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
		},
	});

	// open devTools if we are in dev environment
	if (isDev) {
		mainWindow.webContents.openDevTools();
	}

	// load the index.html for the app
	mainWindow.loadFile(path.join(__dirname, '/index.html'));
};

// Create the About Window
function createAboutWindow(): void {
	aboutWindow = new BrowserWindow({
		title: 'About Image Resizer',
		width: 300,
		height: 300,
	});

	aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
}

app.whenReady().then(() => {
	createMainWindow();

	// implement menu
	const mainMenu = Menu.buildFromTemplate(menu);
	Menu.setApplicationMenu(mainMenu);

	// remove mainWindow from memory on close

	mainWindow.on('closed', (): void => (mainWindow = null));

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createMainWindow();
		}
	});

	mainWindow.on('closed', (): void => (mainWindow = null));
});

// Menu template
const menu: (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] = [
	...(isMac
		? [
				{
					label: app.name,
					submenu: [
						{
							label: 'About',
							click: createAboutWindow,
						},
					],
				},
			]
		: []),
	{
		role: 'fileMenu',
	},
	...(!isMac
		? [
				{
					label: 'Help',
					submenu: [
						{
							label: 'About',
							click: createAboutWindow,
						},
					],
				},
			]
		: []),
];

app.on('window-all-closed', () => {
	if (!isMac) {
		app.quit();
	}
});
