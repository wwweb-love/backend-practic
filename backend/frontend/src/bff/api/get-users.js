import { transformUser } from "../../transformers";

export const getUsers = () =>
    fetch("http://localhost:3033/users")
        .then((loaded) => loaded.json())
        .then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
