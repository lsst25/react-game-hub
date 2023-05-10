import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2326cf96f61740758a62c5e172726f54'
    }
});