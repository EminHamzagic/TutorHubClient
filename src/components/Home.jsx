import { useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Home() {
	const navigate = useNavigate();
	const { getToken, dispatchUserState } = useContext(UserContext);
	useEffect(() => {
		if (!getToken()) navigate("login");
	}, []);

	return (
		<div>
			<h1>Dobrodošli na TutorHub</h1>
			<p>
				platformu koja povezuje učenike sa najboljim profesorima iz Srbije! Bilo da ti je potrebna pomoć u matematici, jezicima, fizici, ili bilo kom drugom predmetu, TutorHub ti omogućava da lako pronađeš privatne časove kod iskusnih i
				kvalifikovanih profesora.
			</p>
		</div>
	);
}
