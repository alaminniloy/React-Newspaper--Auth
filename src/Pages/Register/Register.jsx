import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const photo = form.get("photo");
		const password = form.get("password");
		console.log(email, password, name, photo);

		// Create User
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			{/* <h2 className="text-3xl">This is Register</h2> */}
			<Navbar />
			<div>
				<h2 className="text-3xl text-center mt-10">Please Register</h2>

				<form
					onSubmit={handleRegister}
					className="card-body md:w-3/4 lg:w-1/2 mx-auto
"
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Your Name</span>
						</label>
						<input
							type="text"
							name="name"
							placeholder="Enter Your name"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Photo URL</span>
						</label>
						<input
							type="text"
							name="photo"
							placeholder="Enter Your photo url"
							className="input input-bordered"
							required
						/>
					</div>
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
						<button className="btn btn-primary text-white">Register</button>
					</div>
				</form>
				<p className="text-center">
					Already Have An Account?
					<Link to="/login">
						<span className="text-red-500"> Login</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
