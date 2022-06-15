import { UseDiscoverProps } from './types';
import { setIsLoggedIn } from '../../lib/user/slices';
import { setIsSideMenuOpen,setFilter,setFilters } from './slices';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { AppState } from 'src/app/types';
import { FilterButtonEntryType } from '../../common/components/pillswitch/Types';
import { generateRandomID } from 'src/lib/Utils';



export const useDiscoverHook = (): UseDiscoverProps => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState < boolean > (false);
  const {
    isSideMenuOpen,
    filters,
    selectedFilter
  } = useSelector((state: AppState) => state.discover);

  useEffect(() => {

    const entries: FilterButtonEntryType<string>[] = ["All", "Forex", "Shares", "Crypto", "Indices"].map((entry) => {
      return {
        id: generateRandomID(),
        name: entry,
        value: entry
      }
    })

    dispatch(setFilters({
      entries,
      selected: entries[0]
    }))
    
  }, [])

  const doLogout = (): void => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setIsLoggedIn(false));
    }, 2000);
  };

  const handleLogin = () => {
    dispatch(setIsSideMenuOpen(false));
    setTimeout(() => dispatch(setIsLoggedIn(false)), 500);
  };

  const onSetFilter = (arg: FilterButtonEntryType<string> ) => {
    dispatch(setFilter(arg))
  }

  const toggleSideMenu = () => dispatch(setIsSideMenuOpen(!isSideMenuOpen));

  return {
    loading,
    doLogout,
    handleLogin,
    toggleSideMenu,
    filter: selectedFilter,
    setFilter: onSetFilter,
    entries: filters
  };
};