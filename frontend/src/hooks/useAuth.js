import { useContext } from 'react';
import { UserContext } from '../providers/userProvider';

export function useAuth() {
	const context = useContext(UserContext);

	return context;
}