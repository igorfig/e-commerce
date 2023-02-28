import { useState, useEffect, useRef } from 'react';
import { 
	Container, 
	Link,
	DropdownToggle, 
	DropdownContainer,
	DropdownContent,
	ListItem,
	Sidebar
} from './styles.js'

import dropdownImg from '../../../assets/label/down-arrow.svg'
import rightArrowImg from '../../../assets/label/arrow.svg'

export function DropdownMenu() {
	const [isDropdownMenuActive, setIsDropDownMenuActive] = useState(false);
	const [isSidebarMenuActive, setIsSidebarMenuActive] = useState(false);
	const [productCategoryId, setProductCategoryId] = useState('');
	const ulRef = useRef(null);
	const listRef = useRef(null);

	const handleToggleDropdownMenu = () => setIsDropDownMenuActive(prevState => !prevState);
	const handleOpenSidebarMenu = () => setIsSidebarMenuActive(true);
	const handleGetCategoryId = (e) => setProductCategoryId(e.currentTarget.id);

	const handleCloseSidebarMenu = () => {
		setIsSidebarMenuActive(false);
		!isDropdownMenuActive && setIsSidebarMenuActive(false);
	}

	useEffect(() => {
		ulRef.current && ulRef.current.addEventListener('mouseover', handleCloseSidebarMenu);
		
		return () => ulRef.current && ulRef.current.removeEventListener('mouseover', handleCloseSidebarMenu);
	})

	const productsCategories = {
		hardware: [
			'Processadores', "Placas de Vídeo", "Mémoria Ram", "Fontes", "SSD's & HD's"
		],

		computers: [
			'PC', 'Monitores'
		],

		peripherals: [
			'Mouses', 'Teclados', 'Headsets'
		],

		smartphone: [
			'Android', 'Apple'
		],

		games: [
			'Consoles', "Controles"
		]
	};

	const routeParams = {
		hardware: ['processadores', 'placa-de-video', 'memoria-ram', 'fontes', 'armazenamento'],
		computers: ['computadores', 'monitores'],
		peripherals: ['mouses', 'teclados', 'headset'],
		smartphone: ['smartphone/android', 'smartphone/apple'],
		games: ['consoles', 'controles']
	};

	return (
		<Container>
			<DropdownToggle as="button" onMouseOver={handleToggleDropdownMenu} onMouseOut={handleToggleDropdownMenu}  ref={ulRef}>
				POR CATEGORIA
				<img src={dropdownImg} alt="Abrir dropdown menu"/>
				{isDropdownMenuActive && (
					<DropdownContainer>
						<DropdownContent>
							{new Array(5).fill(0).map((_, index) => {
								const categories = ['Hardware', 'Periféricos', 'Computadores', 'Smartphones', 'Área Gamer']
								const idCategories = ['hardware', 'peripherals', 'computers', 'smartphone', 'games']

								return (
									<ListItem key={index} onMouseOver={(e) => {
										handleOpenSidebarMenu(); 
										handleGetCategoryId(e)
									}} id={idCategories[index]}>
										{categories[index]}
										<img src={rightArrowImg} />
									</ListItem>
								)
							})}
						</DropdownContent>

						{ isSidebarMenuActive && ( <Sidebar onMouseOver={handleOpenSidebarMenu}>
							{productsCategories[productCategoryId].map((category, index) => (
								<ListItem key={index}>
									<a href={`/${routeParams[productCategoryId][index]}`}>
										{category}
									</a>
								</ListItem>	
							))}
						</Sidebar>)}
					</DropdownContainer>
				)}
			</DropdownToggle>
			<Link href="/#featured">DESTAQUES</Link>
			<Link href="/#bestselling">MAIS VENDIDOS</Link>
			<Link href="/#most-searched">MAIS PROCURADOS</Link>
			<Link href="/computadores">PC GAMER</Link>
			<Link href="/smartphones">SMARTPHONES</Link>
		</Container>
	)
}