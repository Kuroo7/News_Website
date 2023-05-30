import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Atif",
        email: "stuff@gmail.com",
    }
});

export default UserContext