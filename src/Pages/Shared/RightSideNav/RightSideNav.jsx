import {
	FaGoogle,
	FaGithub,
	FaFacebook,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";

const RightSideNav = () => {
	return (
		<div>
			<div>
				<h2 className="text-3xl">Login With</h2>
			</div>
			<div className="p-4">
				<div className="mt-5 mb-2">
					<button className="btn btn-outline w-full">
						<FaGoogle />
						Login With Google
					</button>
				</div>
				<div>
					<button className="btn btn-outline w-full ">
						<FaGithub />
						Login With Github
					</button>
				</div>
			</div>
			<div className=" p-4 mb-6">
				<h2 className="text-3xl">Find Us On</h2>
				<a
					className="p-4 flex text-lg items-center border rounded-t-lg "
					href=""
				>
					<FaFacebook className="mr-3 " />
					Facebook
				</a>
				<a className="p-4 flex text-lg items-center border-x  " href="">
					<FaTwitter className="mr-3 " />
					Twitter
				</a>
				<a
					className="p-4 flex text-lg items-center border rounded-b-lg "
					href=""
				>
					<FaInstagram className="mr-3 " />
					Instagram
				</a>
			</div>
			{/* Q zone */}
			<div className="p-4 mb-6 bg-[#F3F3F3]">
				<h2 className="text-xl font-semibold mb-5">Q Zone</h2>
				<img
					className="mb-4"
					src="https://i.ibb.co/nnHm12b/qZone1.png"
					alt=""
				/>
				<img
					className="mb-4"
					src="https://i.ibb.co/WGBChVq/qZone3.png"
					alt=""
				/>
				<img src="https://i.ibb.co/YZsVx9G/qZone2.png" alt="" />
			</div>
		</div>
	);
};

export default RightSideNav;
