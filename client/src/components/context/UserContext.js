import {createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = () => {
  const [username, setUsername] = useState(null);

  const handleUsername = (value) => {
    setUsername(value);
  };

  return <ScoreContext.Provider value={{username, handleUsername}}>{props.children}</ScoreContext.Provider>;
}

export {UserProvider, UserContext}