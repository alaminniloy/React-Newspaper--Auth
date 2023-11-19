import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const handleLogin = (e) => {
		e.preventDefault();
		// const email = e.target.email.value;
		// const password = e.target.password.value;
		// console.log(email, password);
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		console.log(email, password);
		signIn(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<Navbar />
			<div>
				<h2 className="text-3xl text-center mt-10">Please login</h2>

				<form
					onSubmit={handleLogin}
					className="card-body md:w-3/4 lg:w-1/2 mx-auto
"
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							name="email"
							placeholder="Enter Your email address"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder="Enter your password"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary text-white">Login</button>
					</div>
				</form>
				<p className="text-center">
					Do not Have An Account ?{" "}
					<Link to="/register">
						<span className="text-red-500">Register</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
