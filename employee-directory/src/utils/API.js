import axios from "axios";

const URL = "https://randomuser.me/api/?nat=us&results=30"

const getEmployees = function() {
    return axios.get(URL);
}

export {
    getEmployees
}