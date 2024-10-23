import { useContext, useEffect, useState } from "react";
import "../../css/Login.css";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
	const { dispatchUserState, getToken } = useContext(UserContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = () => {
		if (email !== "" && password !== "") {
			const loginInfo = {
				email: email,
				password: password,
			};
			axios
				.post("http://localhost:5206/api/Auth/Login", loginInfo)
				.then((res) => {
					dispatchUserState({ type: "setToken", value: res.data.token });
					Cookies.set("authToken", res.data.token, { expires: 1 });
					navigate("/");
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		if (getToken()) navigate("/");
	}, []);

	return (
		<div className="container">
			<div className="loginForm">
				<h1>Login</h1>
				<div className="inputField">
					<label>Email:</label>
					<input onChange={handleChangeEmail} type="text" />
				</div>
				<div className="inputField">
					<label>Password:</label>
					<input onChange={handleChangePassword} type="password" />
				</div>
				<button onClick={handleLogin} className="loginBtn">
					Prijavi se
				</button>
			</div>
		</div>
	);
}
