import { transformUser } from "../../transformers";

export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3033/users?login=${loginToFind}`)
        .then((loaded) => loaded.json())
        .then(([loaded]) => loaded && transformUser(loaded)) 

