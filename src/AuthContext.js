import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const initialState = {isAuthenticated: false};
  const [authState, setAuthState] = useState(initialState);

  return (
    <AuthContext.Provider value={{authState}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;