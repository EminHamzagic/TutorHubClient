import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import "./css/App.css";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { UserContext } from "./Contexts/UserContext";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import Register from "./components/Register/Register";

function App() {
	const { getToken, userState, dispatchUserState } = useContext(UserContext);
	useEffect(() => {
		dispatchUserState({ type: "setToken", value: getToken() });
	}, []);

	return (
		<div className="App">
			<Helmet>
				<title>TutorHub</title>
			</Helmet>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
