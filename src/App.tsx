import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import SingleCharacterPage from './pages/single-character-page/SingleCharacterPage';
import './App.css';
import ArtifactsList from './components/artifacts/ArtifactsList/ArtifactsList';
import NotFound from './pages/not-found/NotFound';

function App() {
	return (
		<div className="main_layout">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/characters/:name"
					element={<SingleCharacterPage />}
				/>
				<Route path="/artifacts" element={<ArtifactsList />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
