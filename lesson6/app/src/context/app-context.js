import React from "react";

const AppContext = React.createContext({
    user: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
})

export default AppContext;