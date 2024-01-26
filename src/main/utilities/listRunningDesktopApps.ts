import { ipcMain } from 'electron';
import ps from 'ps-node';

export const setupProcessListeners = (): void => {
	ipcMain.on('request-running-apps', (event) => {
		ps.lookup({}, (error, resultList) => {
			if (error) {
				console.log('Error from setupProcessListeners function: ', error);
			}
			event.reply('response-running-apps', resultList);
		});
	});
};
