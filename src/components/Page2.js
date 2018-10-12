import React from 'react';
import Evacuees from './Logo/Evacuees';
import Footer from './Footer/Footer'; 
import Elkas from './Elkaslmeen/Elkaslmeen';

const Page2 = ({ onRouteChange }) =>{
	return(
		<div className = "App">
			<Evacuees />
			<Elkas />
	        <button onClick={()=> onRouteChange('page1')}>Home Page </button>
	        <button className='disabled'>Page2</button>
	        <button onClick={()=> onRouteChange('page3')}>Contact Us</button>
	        <Footer />	
	    </div>
	)        


}
export default Page2;