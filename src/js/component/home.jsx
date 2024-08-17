import React from "react";

//include images into your bundle
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

//create your first component
const Home = () => {
	return (
	  <div>
		<Navbar />
		<div className="container mt-4">
		<Jumbotron />
		<div className="container mt-4">
		  <div className="row">
			<div className="col-md-3 mb-4">
			  <Card image="https://picsum.photos/500/325"/>
			</div>
			<div className="col-md-3 mb-4">
			  <Card image="https://picsum.photos/500/325"/>
			</div>
			<div className="col-md-3 mb-4">
			  <Card image="https://picsum.photos/500/325"/>
			</div>
			<div className="col-md-3 mb-4">
			  <Card image="https://picsum.photos/500/325"/>
			</div>
		  </div>
		</div>
		</div>
		<Footer />
	  </div>
	);
  };
  
  export default Home;
