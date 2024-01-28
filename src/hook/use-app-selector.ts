

/* this will help us to fetch state as selectors*/
import { RootState } from '@/app/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
