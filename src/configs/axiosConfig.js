import axios from "axios";

const instance = axios.create({
    baseURL: "http://test.example.com",
});
const token = localStorage.getItem("token");
if (token) {
    instance.defaults.headers.common["Authorization"] = token;
}

export default instance;