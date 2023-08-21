import './App.css';
import { KolButton } from '@public-ui/react';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hello Vite + React + KoliBri!</p>
				<p className="flex gap-4">
					<KolButton
						_label="Primary"
						_on={{
							onClick: () => {
								console.log('Clicked');
							},
						}}
						_variant="primary"
					/>
					<KolButton
						_label="Secondary"
						_on={{
							onClick: () => {
								console.log('Clicked');
							},
						}}
						_variant="secondary"
					/>
					<KolButton
						_hideLabel
						_label="Danger"
						_icon="codicon codicon-trash"
						_on={{
							onClick: () => {
								console.log('Clicked');
							},
						}}
						_variant="danger"
					/>
				</p>
			</header>
		</div>
	);
}

export default App;
