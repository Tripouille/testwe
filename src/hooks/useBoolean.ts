import { useCallback, useState } from 'react';
import { SetterState } from '../utils/types';

type InitialState = SetterState<boolean>;

const useBoolean = (initialState: InitialState = false) => {
  const [value, setValue] = useState(initialState);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, { on, off, toggle }] as const;
};

export default useBoolean;
