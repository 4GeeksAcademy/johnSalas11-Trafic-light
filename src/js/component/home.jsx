import React, {useState} from "react";
import { Semaforo } from "./semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<div className="pt-5 d-flex  justify-content-center">
		<Semaforo/>
		</div>
	);
};

export default Home;
