import { useContext } from 'react';
import { CartContext } from '../providers/cartProvider';

export const useCart = () => useContext(CartContext);