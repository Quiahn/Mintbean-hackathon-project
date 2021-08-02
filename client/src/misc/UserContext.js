import { createContext } from "react";

export const UserContext = createContext({ loggedIn: false, data: null })