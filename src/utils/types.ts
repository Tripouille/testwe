import { Dispatch, SetStateAction } from 'react';

export type Callback = () => void;

export type Setter<S> = Dispatch<SetStateAction<S>>;

export type SetterState<S> = S | (() => S);
