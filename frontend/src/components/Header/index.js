import { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { 
	Container,
	LogoLink,
	SearchContainer,
	HeaderActions,
	DashboardLink,
 } from './styles';
import { AuthButton } from '../Buttons/AuthButton'
import { Sidebar } from './Sidebar/'
import { SearchBar } from './SearchBar'
import { DropdownMenu } from './DropdownMenu'

import menuImg from '../../assets/label/menu.svg'
import magnifierImg from '../../assets/label/magnifier.svg'
import userImg from '../../assets/label/user.svg';
import cartImg from '../../assets/label/cart.svg';
import dashboardIconImg from '../../assets/label/dashboard-icon.svg';

export function Header({ isSearchBarOnFocus, handleSearchBarFocus }) {
	const [isRootAuthenticated , setIsRootAuthenticated] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const [windowWidth, setWindowWith] = useState(window.innerWidth);

	const location = useLocation();

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
			

			<LogoLink href="/">
				{ windowWidth >= 640 && <h1>Link Start</h1> }
				<span>
					<span>L<sup>S</sup></span> { windowWidth >= 640 ? 'Commerce' : '' }
				</span>
			</LogoLink>

			
			{location.pathname !== '/login' && <SearchContainer>
				<SearchBar isSearchBarOnFocus={isSearchBarOnFocus} handleSearchBarFocus={handleSearchBarFocus}/>
			</SearchContainer>}

			{<HeaderActions isLoginPage={location.pathname === '/login' ? true : false}>
				{ windowWidth >= 640 && <AuthButton /> }
				{ isRootAuthenticated && windowWidth >= 800 && <DashboardLink>
					<img src={dashboardIconImg} /> 
					Dashboard
				</DashboardLink> }

				{ !isRootAuthenticated && windowWidth > 800 &&	
					<a href="/carrinho">
						<img src={cartImg} alt="Carrinho" />
					</a>
				}
			</HeaderActions>}
			
			{windowWidth >= 1023 && (
				<DropdownMenu />
			)} 
			
			{ sidebar && <Sidebar isActive={setSidebar}/> }
		</Container>
	)
}