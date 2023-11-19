import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
	return (
		<div>
			<Header></Header>
			<BreakingNews></BreakingNews>
			<Navbar></Navbar>
			{/* <RightSideNav></RightSideNav> */}
			{/* <LeftSideNav></LeftSideNav> */}
			{/* <h2 className="text-3xl font-poppins font-bold">This is Home</h2> */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
				<div className="border">
					<LeftSideNav></LeftSideNav>
				</div>
				<div className="border md:col-span-2">
					<h2 className="text-3xl">Dragon News Home</h2>
				</div>
				<div className="border">
					<RightSideNav></RightSideNav>
				</div>
			</div>
		</div>
	);
};

export default Home;
