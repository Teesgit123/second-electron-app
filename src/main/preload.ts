import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('Electron', {
	ipcRenderer: {
		send: ipcRenderer.send,
		on: (
			channel: string,
			func: (event: IpcRendererEvent, ...args: any[]) => void
		) => {
			ipcRenderer.on(channel, (event, ...args) => func(event, ...args));
		},
		removeListener: (
			channel: string,
			func: (event: IpcRendererEvent, ...args: any[]) => void
		) => {
			ipcRenderer.removeListener(channel, func);
		},
	},
});
