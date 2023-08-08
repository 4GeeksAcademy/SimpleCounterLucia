import React from "react";
import SecondCounter from "./SecondsCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({digito, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<div className="text-center">
			<SecondCounter digito={digito} digito2={digito2} digito3={digito3} digito4={digito4} digito5={digito5} digito6={digito6}/>
			{/* <secondCounter digito/> */}
			{/* <h1 className="text-center mt-5">{digito}</h1>
			<h1 className="text-center mt-5">{digito2}</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

export default Home;
