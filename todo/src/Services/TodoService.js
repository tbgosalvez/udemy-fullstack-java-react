import axios from 'axios';
import CONSTANTS from '../CONSTANTS.js';

class TodoService {
   
    findAll(username) {
        // Request returns a Promise
        return axios.get(`${CONSTANTS.API_URL_ROOT}/${username}/todos`);       
    }

    findById(username, id) {
        return axios.get(`${CONSTANTS.API_URL_ROOT}/${username}/todos/${id}`);
    }

    deleteById(username, id) {
        console.log(`deleted ${id}`);
        return axios.delete(`${CONSTANTS.API_URL_ROOT}/${username}/todos/${id}`);
    }

    updateById(username, id, todoObj) {
        return axios.put(`${CONSTANTS.API_URL_ROOT}/${username}/todos/${id}`, todoObj);
    }

    create(username, todoObj) {
        return axios.post(`${CONSTANTS.API_URL_ROOT}/${username}/todos`, todoObj);
    }
}

export default new TodoService();