import React, { createContext, useState } from 'react';

export const WebsiteNameContext = createContext();

const WebsiteNameProvider = ({children}) => {
    const [websiteName, setWebsiteName] = useState('');
    return (
        <WebsiteNameContext.Provider value={{websiteName, setWebsiteName}}>
            {children}
        </WebsiteNameContext.Provider>
    );
};

export default WebsiteNameProvider;