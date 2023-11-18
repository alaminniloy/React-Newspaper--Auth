import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
	return (
		<div className="text-center mt-12 ">
			{/* <h2 className="text-2xl">Header</h2> */}
			{/* online  */}
			{/* <img src="https://i.ibb.co/THLVcCQ/logo.png" alt="" /> */}
			<img className="mx-auto" src={logo} alt="" />
			<p className="font-normal text-xl mt-5">
				Journalism Without Fear or Favour
			</p>

			<p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
		</div>
	);
};

export default Header;
