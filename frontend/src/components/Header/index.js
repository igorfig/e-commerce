import { useState, useEffect, useRef } from 'react';

import { Container } from './styles';
import { AuthButton } from '../Auth/Button'
import { Sidebar } from './Sidebar/'
import { SearchBar } from './SearchBar'
import { DropdownMenu } from './DropdownMenu'

import menuImg from '../../assets/menuOn.svg'
import magnifierImg from '../../assets/magnifier.svg'
import userImg from '../../assets/user.svg';
import cartImg from '../../assets/cart.svg';
import dashboardIconImg from '../../assets/dashboard-icon.svg';

export function Header({ isSearchBarOnFocus, handleSearchBarFocus }) {
	const [isRootAuthenticated , setIsRootAuthenticated] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const [windowWidth, setWindowWith] = useState(window.innerWidth);

	const handleOpenSidebar = () => setSidebar(prevState => !prevState);
	const getScreenSize = () => setWindowWith(window.innerWidth);
	

	useEffect(() => {
		window.addEventListener('resize', getScreenSize);

		return () => window.removeEventListener('resize', getScreenSize)
	})

	return (
		<Container>
			<button onClick={handleOpenSidebar}>
				<img src={menuImg} className="mobile-view menu-on" />
			</button>
			

			<div className="title">
				{ windowWidth > 800 ? <h1>Link Start</h1> : ''}
				<span>
					<span className="logo">L<sup className="logo-sup">S</sup></span> { windowWidth > 800 ? 'Commerce' : '' }
				</span>
			</div>

			
			<div className="search-engine-container">
				<SearchBar isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
			</div>

			<div className="header-actions">
				<AuthButton />
				{ isRootAuthenticated && <a href="" className="dashboard-link">
					<img src={dashboardIconImg} /> 
					Dashboard
				</a> }
			</div>
			
			{windowWidth >= 1023 && (
				<DropdownMenu />
			)} 
			
			{ sidebar && <Sidebar isActive={setSidebar}/> }
		</Container>
	)
}