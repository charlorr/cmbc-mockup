import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
Logo,
} from './NavbarElements';
import logo from '../../images/cmbc-logo.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/about'>
			About
		</NavLink>
		<NavLink to='/events'>
			Events
		</NavLink>

		{/* Second Nav */}
		</NavMenu>

		<Logo>
			<img
				src={logo}
				alt='Celebrity Memoir Book Club Logo'
				style={{
					height: '100%',
				}}
			>
			</img>
		</Logo>

		<NavBtn>
		<NavBtnLink to='/signin'>Listen</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
