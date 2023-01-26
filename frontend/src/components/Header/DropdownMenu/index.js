import { useState, useEffect, useRef } from 'react';
import { ListContainer } from './styles.js'

import dropdownImg from '../../../assets/dropdown.svg'
import rightArrowImg from '../../../assets/rightArrow.svg'

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
			'Computador', 'Computador', 'Computador', 'Computador', 'Computador'
		],

		peripherals: [
			'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals'
		],

		smartphone: [
			'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals'
		],

		games: [
			'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals'
		],

		gameStation: [
			'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals', 'peripherals'
		]
	}

	return (
		<ListContainer>
					<li onMouseOver={handleToggleDropdownMenu} onMouseOut={handleToggleDropdownMenu}  ref={ulRef}>
						<a href="#">POR CATEGORIA</a>
						<img src={dropdownImg} alt="Abrir dropdown menu"/>
						{isDropdownMenuActive && (
							<>
								<ul className="dropdown">
									{new Array(6).fill(0).map((i, index) => {
										const categories = ['Hardware', 'Periféricos', 'Computadores', 'Smartphones', 'Games', 'Espaço Gamer']
										const idCategories = ['hardware', 'peripherals', 'computers', 'smartphone', 'games', 'gameStation']

										return (
											<li key={index} onMouseOver={(e) => {
												handleOpenSidebarMenu(); 
												handleGetCategoryId(e)
											}} id={idCategories[index]}>
												<span>
													{categories[index]}
													<img src={rightArrowImg} />
												</span>
											</li>
										)
									})}
								</ul>

								{ isSidebarMenuActive && ( <ul className="sidebar" onMouseOver={handleOpenSidebarMenu}>
									{productsCategories[productCategoryId].map((product, index) => (
										<li key={index}>
											<a href="#">
												{product}
											</a>
										</li>	
									))}
								</ul>)}
							</>
						)}
					</li>

					<li>
						<a href="#">DESTAQUES</a>
					</li>

					<li>
						<a href="#">MAIS VENDIDOS</a>
					</li>

					<li>
						<a href="#">MAIS PROCURADOS</a>
					</li>


					<li>
						<a href="#">PC GAMER</a>
					</li>


					<li>
						<a href="#">SMARTPHONES</a>
					</li>

				</ListContainer>
	)
}