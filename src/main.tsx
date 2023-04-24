import ReactDOM from 'react-dom/client';
import Layout from './layouts/Layout.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<App />
			</Layout>
		</BrowserRouter>
	</Provider>
);
