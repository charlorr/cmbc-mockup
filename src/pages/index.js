import React from 'react';
import banner from '../images/ashlee-simpson.jpg'

const Home = () => {
return (
	<div
    className='fade-in'
	style={{
		position: 'fixed',
		height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
	}}
	>
        <div>
            <img src={banner}
                alt='Ashlee Simpson'
                style={{
                    width: '100%',
                    zIndex: '100'
                }}
            >
            </img>
        </div>
        <div><h1>Hi, <br/>I'm Charlene</h1></div>

	</div>
);
};

export default Home;
