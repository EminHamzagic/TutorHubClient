import axios from "axios";
import "../../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ime, setIme] = useState("");
	const [prezime, setPrezime] = useState("");
	const [brTel, setBrTel] = useState("");
	const [role, setRole] = useState("");
	const [bio, setBio] = useState("aaaaaaaaaa");
	const [grad, setGrad] = useState("a");
	const [file, setFile] = useState(null);
	const navigate = useNavigate();

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

	const handleChangeBio = (e) => {
		setBio(e.target.value);
	};

	const handleChangeGrad = (e) => {
		setGrad(e.target.value);
	};

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleRegister = () => {
		if (username !== "" && email !== "" && password !== "" && ime !== "" && prezime !== "" && brTel !== "" && role !== "") {
			const data = {
				username: username,
				email: email,
				password: password,
				roles: [role],
				ime: ime,
				prezime: prezime,
				phone: brTel,
				bio: bio,
				grad: grad,
			};
			console.log(data);

			if (role === "Professor") {
				if (bio !== "" && grad !== "" && file !== null) {
					axios
						.post("http://localhost:5206/api/Auth/Register", data)
						.then((res) => {
							const formData = new FormData();
							formData.append("image", file);
							formData.append("professor_Id", res.data);
							axios
								.post("http://localhost:5206/api/Profesor/setPfp", formData, {
									headers: {
										"Content-Type": "multipart/form-data",
									},
								})
								.then((response) => console.log(response))
								.catch((err) => console.log(err));
						})
						.catch((err) => console.log(err));
				}
			} else {
				axios
					.post("http://localhost:5206/api/Auth/Register", data)
					.then((res) => {
						console.log(res.data);
						navigate("/login");
					})
					.catch((err) => console.log(err));
			}
		}
	};

	return (
		<div className="container">
			<div className="registerForm">
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
				{role === "Professor" ? (
					<div>
						<div className="inputField">
							<label>Biografija:</label>
							<textarea onChange={handleChangeBio}></textarea>
						</div>
						<div className="inputField">
							<label>Grad:</label>
							<input onChange={handleChangeGrad} type="text" />
						</div>
						<div className="inputField">
							<label>Biografija:</label>
							<input type="file" accept="image/*" onChange={handleFileChange} />
						</div>
					</div>
				) : (
					<></>
				)}
				<button onClick={handleRegister} className="loginBtn">
					Registruj se
				</button>
			</div>
		</div>
	);
}
