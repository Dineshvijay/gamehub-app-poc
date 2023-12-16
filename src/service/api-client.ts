import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "170dd501261e4a1e8c54c6c616a812d0"
    }
})