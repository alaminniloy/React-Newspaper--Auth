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
	// loading
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// signIn
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// logout
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("user in the auth state changed", currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
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
