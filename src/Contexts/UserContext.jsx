import { createContext, useReducer } from "react";
import userReducer from "../Reducers/userReducer";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [userState, dispatchUserState] = useReducer(userReducer, {
		accessToken: null,
	});
	return (
		<UserContext.Provider
			value={{
				userState,
				dispatchUserState,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
