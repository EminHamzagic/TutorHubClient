import { createContext, useReducer } from "react";
import userReducer from "../Reducers/userReducer";
import Cookies from "js-cookie";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [userState, dispatchUserState] = useReducer(userReducer, {
		accessToken: null,
	});

	const isUserLogged = () => userState.accessToken;

	const getToken = () => {
		const token = Cookies.get("authToken");
		return token ? token : null;
	};

	return (
		<UserContext.Provider
			value={{
				userState,
				dispatchUserState,
				isUserLogged,
				getToken,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
