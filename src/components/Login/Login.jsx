import { useContext, useState } from "react";
import "../../css/Login.css";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

export default function Login() {
	const { dispatchUserState, userState } = useContext(UserContext);
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
				})
				.catch((err) => console.log(err));
		}
	};

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
					<input onChange={handleChangePassword} type="text" />
				</div>
				<button onClick={handleLogin} className="loginBtn">
					Prijavi se
				</button>
			</div>
		</div>
	);
}
