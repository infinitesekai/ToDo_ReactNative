import React, { useState, createContext, useContext } from 'react';


const AppContext = createContext();

const AppProvider = ({ children }) => {



    const [data, setData] = useState([
        // { title: "Pay1", date: "02/02/22" },
        // { title: "Pay2", date: "2/2/22" },
        // { title: "Pay3", date: "2/2/22" },
    ])


    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider >

    );
};


export default AppProvider;

export const useAppContext = () => useContext(AppContext)
