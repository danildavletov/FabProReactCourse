import React from "react";

const AppContext = React.createContext({
    isLoggedIn: false,
    loginHandler: () => {},
    logoutHandler: () => {},
})

export default AppContext;