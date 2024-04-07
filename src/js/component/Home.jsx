import React from "react";

//create your first component
import Nav from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Cards from "./Card.jsx"
import Footer from "./Footer.jsx"


const Home = () => {
	return (
		<div>
			< Nav />
			< Jumbotron /> 
			< Cards />
			< Footer />
		</div>
	);
};

export default Home;
