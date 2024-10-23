import "../../css/Login.css";
import { useState } from "react";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ime, setIme] = useState("");
	const [prezime, setPrezime] = useState("");
	const [brTel, setBrTel] = useState("");
	const [role, setRole] = useState("");

	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeIme = (e) => {
		setIme(e.target.value);
	};

	const handleChangePrezime = (e) => {
		setPrezime(e.target.value);
	};

	const handleChangeBrTel = (e) => {
		setBrTel(e.target.value);
	};

	const handleChangeRole = (e) => {
		setRole(e.target.value);
	};

	const handleLogin = () => {
		const data = {
			username: username,
			email: email,
			password: password,
			roles: [role],
			ime: ime,
			prezime: prezime,
			phone: brTel,
		};
		console.log(data);
	};

	return (
		<div className="container">
			<div className="loginForm">
				<h1>Registracija</h1>
				<div className="inputField">
					<label>Username:</label>
					<input onChange={handleChangeUsername} type="text" />
				</div>
				<div className="inputField">
					<label>Email:</label>
					<input onChange={handleChangeEmail} type="text" />
				</div>
				<div className="inputField">
					<label>Password:</label>
					<input onChange={handleChangePassword} type="password" />
				</div>
				<div className="inputField">
					<label>Ime:</label>
					<input onChange={handleChangeIme} type="text" />
				</div>
				<div className="inputField">
					<label>Prezime:</label>
					<input onChange={handleChangePrezime} type="text" />
				</div>
				<div className="inputField">
					<label>Broj telefona:</label>
					<input onChange={handleChangeBrTel} type="text" />
				</div>
				<div className="radio-group">
					<label>
						<input onChange={handleChangeRole} type="radio" name="role" value="User" />
						Učenik
					</label>

					<label>
						<input onChange={handleChangeRole} type="radio" name="role" value="Professor" />
						Profesor
					</label>
				</div>
				<button onClick={handleLogin} className="loginBtn">
					Registruj se
				</button>
			</div>
		</div>
	);
}
