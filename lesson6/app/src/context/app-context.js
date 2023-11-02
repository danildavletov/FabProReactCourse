import React from "react";

const AppContext = React.createContext({
    isLoggedIn: false,
    setLoggedIn: () => {},
    setLoggedOut: () => {}
})

export default AppContext;