import { UsersAction } from './actions';
import { UsersReducer } from './reducer';
import * as states from './states';
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer
} from 'react';

export type UsersDispatch = (action: UsersAction) => void;
type UsersProviderProps = {
  children: ReactNode;
};

const UsersStateContext = createContext<states.UsersState | undefined>(
  undefined
);

const UsersDispatchContext = createContext<
  Dispatch<UsersAction> | undefined
>(undefined);

function UsersProvider({ children }: UsersProviderProps) {
  const [UsersState, UsersDispatch] = useReducer(
    UsersReducer,
    { ...states.InitialUsersState }
  );

  return (
    <UsersDispatchContext.Provider value={UsersDispatch}>
      <UsersStateContext.Provider value={UsersState}>
        {children}
      </UsersStateContext.Provider>
    </UsersDispatchContext.Provider>
  );
}

function useDispatchContext() {
  const context = useContext(UsersDispatchContext);
  if (context === undefined) {
    throw new Error('Must be within a provider');
  }
  return context;
}

function useStateContext() {
  const context = useContext(UsersStateContext);
  if (context === undefined) {
    throw new Error('Must be within a provider');
  }
  return context;
}

export { UsersProvider, useDispatchContext, useStateContext };
