import React from 'react';

interface ProcessObject {
	[key: string]: string;
}

const App = () => {
	const [runningDesktopApps, setRunningDesktopApps] = React.useState<
		ProcessObject[]
	>([]);

	React.useEffect(() => {
		window.Electron.ipcRenderer.send('request-running-apps');

		const handleResponse = (
			event: Electron.IpcRendererEvent,
			data: ProcessObject[]
		) => {
			// Process the list of running applications
			console.log(data);
		};

		window.Electron.ipcRenderer.on('response-running-apps', handleResponse);

		return () => {
			window.Electron.ipcRenderer.removeListener(
				'response-running-apps',
				handleResponse
			);
		};
	}, []);

	return (
		<div>
			<h1>Hello, Electron!</h1>
			<p>This is a React component inside an Electron App.</p>
			<ul>
				{runningDesktopApps.map((app, index) => (
					<li key={index}>{app.name}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
