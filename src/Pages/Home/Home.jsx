import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
	const news = useLoaderData();
	console.log(news);
	return (
		<div>
			<Header></Header>
			<BreakingNews></BreakingNews>
			<Navbar></Navbar>
			{/* <RightSideNav></RightSideNav> */}
			{/* <LeftSideNav></LeftSideNav> */}
			{/* <h2 className="text-3xl font-poppins font-bold">This is Home</h2> */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
				<div className="">
					<LeftSideNav></LeftSideNav>
				</div>
				{/* News Container  */}
				<div className=" md:col-span-2">
					{/* <h2 className="text-3xl">Dragon News Home</h2> */}
					{news.map((aNews) => (
						<NewsCard key={aNews.id} news={aNews}></NewsCard>
					))}
				</div>
				<div className="">
					<RightSideNav></RightSideNav>
				</div>
			</div>
		</div>
	);
};

export default Home;
