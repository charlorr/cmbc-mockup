import React from 'react';
import banner from '../images/ashlee-header.jpeg'

const Home = () => {
return (
	<div
    className='fade-in'
	style={{
		// position: 'fixed',
		height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15px'
	}}
	>
        <div
            style={{
                display: 'inline-block',
                position: 'absolute',
                zIndex: '20',
                top: '300px',
            }}
        >
            <div><h1 class='highlight' >This is</h1></div>
            <div><h1 class='highlight' >Celebrity Memoir Book Club!</h1></div>
        </div>
        <div
            style={{
                textAlign: 'right',
                display: 'inline-block',
                right: '0',
                position: 'absolute',
            }}
        >
        <img src={banner}
            alt='Ashlee Simpson'
            style={{
                postion: 'absolute',
                maxHeight: '70vh',
            }}
        >
        </img>

        </div>
        {/* <div style={{
            background: '#8982d5',
            width: '100%',
    }}>
            Example!
        </div> */}
	</div>
);
};

export default Home;
