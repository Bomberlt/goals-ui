import axios from "axios";

const getGoals = () => {
    console.log(process.env.API_URL);
    return axios.get(process.env.API_URL);
}

export default { getGoals };
