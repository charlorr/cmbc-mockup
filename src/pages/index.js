import React from 'react';

const Home = () => {
return (
	<div
    class='fade-in'
	style={{
		position: 'fixed',
		height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
	}}
	>
        <div>
            <img src='../../images/ashlee-simpson.jpg'
                alt='Ashlee Simpson'
                style={{
                    width: '100%',
                }}
            >
            </img>
        </div>
        <div><h1>Hi, <br/>I'm Charlene</h1></div>

	</div>
);
};

export default Home;
