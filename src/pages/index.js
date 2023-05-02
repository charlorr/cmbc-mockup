import React from 'react';
import banner from '../images/ashlee-header.jpeg'
import worm from '../images/lil-worm.png'

const Home = () => {
return (
    <div>

    {/* Panel 1 */}
	<div
    className='fade-in'
	style={{
		// position: 'fixed',
		height: '75vh',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15px'
	}}
	>
        <div
            className='this-is-parent'
            style={{
                display: 'inline-block',
                position: 'absolute',
                zIndex: '20',
                top: '300px',
            }}
        >
            <div><h1 class='highlight' >This is</h1></div>
            <div><h1 class='highlight' >Celebrity Memoir Book Club!</h1></div>
            <div
                style={{textAlign: 'center'}}
            >
                <br></br>
                <button>Listen Now</button></div>
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
                maxHeight: '75vh',
            }}
        >
        </img>
        </div>
        </div>
        {/* Panel 2 */}
        <div style={{
            background: '#8982d5',
            width: '100%',
            textAlign: 'center',
    }}>
            <div style={{
                display: 'inline-block',
                paddingTop: '50px',
            }}
            >
                <img style={{display: 'inline', paddingRight: '10px'}}
                    src={worm}
                    alt='Lil worm'
                >
                </img>
                <h2 style={{display: 'inline'}}>Sample Header</h2>
            </div>
            <div style={{
                background: '#8982d5',
                position: 'static',
                right: '0',
                left: '0',
                marginRight: 'auto',
                marginLeft: 'auto',
                width: '50vw',
            }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
	</div>
);
};

export default Home;
