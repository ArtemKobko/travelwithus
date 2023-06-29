import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

function ContextProvider({ children }) {
  const [countryId, setCountryId] = useState(1);
  const [desiredPrice, setDesiredPrice] = useState(2400);
  const [buttonPush, setButtonPush] = useState(false);
  const contextValue = useMemo(() => ({
    countryId,
    setCountryId,
    desiredPrice,
    setDesiredPrice,
    buttonPush,
    setButtonPush,
  }), [countryId, setCountryId, desiredPrice, setDesiredPrice, buttonPush, setButtonPush]);
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, ContextProvider };
