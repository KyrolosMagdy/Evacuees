import React from 'react';
import Evacuees from './Logo/Evacuees';
import Footer from './Footer/Footer';


const Page3 = ({ onRouteChange }) =>{
	return(
		<div className = "App">
			<Evacuees />
			<button  onClick={()=> onRouteChange('page1')}>Home Page </button>
	        <button  onClick={()=> onRouteChange('page2')}> Page2</button> 
	        <button  className='disabled'>Contact Us</button>
	        <Footer />	
	    </div> 
	)       


}
export default Page3;