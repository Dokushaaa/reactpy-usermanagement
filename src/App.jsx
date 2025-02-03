import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainHome from "./components/pages/developer/home/MainHome";
import { StoreProvider } from "./store/StoreContext";
function App() {
	return (
		<>
			<StoreProvider>
				<Router>
					<Routes>
						<Route
							path='/*'
							element={<MainHome />}
						/>
					</Routes>
				</Router>
			</StoreProvider>
		</>
	);
}
export default App;
