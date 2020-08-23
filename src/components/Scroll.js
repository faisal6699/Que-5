import React from 'react';

const Scroll = (props) => {
	return (
		<div className='center' style = {{  border:'1px solid black' , height:'auto', width: '700px' }}>
			{props.children}
		</div>			
	);
}

export default Scroll