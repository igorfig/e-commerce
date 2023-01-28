import { Carousel } from '../components/Carousel'
import { ProductsBoard } from '../components/ProductsBoard'

export function Home({ banners, handleChangeBackgroundColor, isSearchBarOnFocus }) {
	
	return (
		<>
			<Carousel banners={banners} changeBackgroundColor={handleChangeBackgroundColor} applyOpacity={isSearchBarOnFocus ? true : false}/>
			<ProductsBoard applyOpacity={isSearchBarOnFocus ? true : false}/>	
		</>
	)
}