/* eslint-disable react-refresh/only-export-components */
import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <AppContext.Provider value={{
            isMenuOpen, toggleMenu, setIsMenuOpen, activeTab, setActiveTab,
        }} >
            {children}
        </AppContext.Provider>
    );
};

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };