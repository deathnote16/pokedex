
/* this tool will help us to dispatch action from reducer*/
import { AppDispatch } from '@/app/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();