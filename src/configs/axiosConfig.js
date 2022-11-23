import axios from "axios";

const instance = axios.create({
    baseURL: "http://pro-cms.robust/api/",
});
const token = localStorage.getItem("token");
if (token) {
    instance.defaults.headers.common["Authorization"] = token;
}

export default instance;
