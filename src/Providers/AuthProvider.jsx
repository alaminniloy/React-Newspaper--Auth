import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// signIn
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// logout
	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("user in the auth state changed", currentUser);
			setUser(currentUser);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		logOut,
		signIn,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
AuthProvider.propTypes = {
	children: PropTypes.node,
};