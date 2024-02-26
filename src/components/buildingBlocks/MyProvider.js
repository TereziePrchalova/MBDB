import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <MyContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;