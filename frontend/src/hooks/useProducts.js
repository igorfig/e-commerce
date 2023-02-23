import { useContext } from 'react';
import { ProductsContext } from '../providers/productsProvider';

export const useProducts = () => useContext(ProductsContext);