import React from 'react';
import Tilt from 'react-tilt';
import Evacuees1 from './Evacuees.png';
import './Evacuees.css';



const Evacuees = ()=>{
	return(
		<div className=' ma4 mt0 Tilt br4'>	
			<Tilt className="br4 shadow-2" options={{ max : 90 }} style={{ height: 200, width: 450}} >
 				<div className="Tilt-inner pa3"> 
 					<img  style={{paddingTop:'5px'}} alt='not supported' src={Evacuees1}/> 
 				</div>
 			</Tilt>
		</div>
	);
} 


export default Evacuees; 	