import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("categories.json")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, []);

	return (
		<div className="space-y-8">
			<h2 className="text-2xl">All Category</h2>
			{categories.map((category) => (
				<Link
					className="block ml-4 text-xl font-medium text-[#9F9F9F]"
					key={category.id}
					to={`/category/${category.id}`}
				>
					{category.name}
				</Link>
			))}
		</div>
	);
};

export default LeftSideNav;
