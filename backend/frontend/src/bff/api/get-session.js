import { transformSession } from "../../transformers";

export const getSession = async (hash) =>
    fetch(`http://localhost:3033/sessions?hash=${hash}`)
        .then((loaded) => loaded.json())
        .then(([loaded]) => loaded && transformSession(loaded)) 

