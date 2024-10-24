import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import UserContextProvider from "./Contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</BrowserRouter>
);
