import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
	return (
		<div className="flex p-4 bg-[#F3F3F3]">
			{/* <h2 className="text-3xl">Breaking News</h2> */}
			<button className="btn btn-secondary"> Latest News</button>
			<Marquee pauseOnHover={true} type={"right"} speed={100}>
				<Link className="mr-12" to={"/"}>
					I can be a React component, multiple React components.......
				</Link>
				<Link to={"/"}>
					I can be a React component, multiple React components.......
				</Link>
				<Link className="mr-12" to={"/"}>
					I can be a React component, multiple React components.......
				</Link>
			</Marquee>
		</div>
	);
};

export default BreakingNews;
