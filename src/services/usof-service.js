import axios from "axios";

axios.defaults.baseURL = 'http://localhost/usof-last-back/usof/public/index.php/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class UsofService {

    async getUsers() {
        const response = await axios.get('/users');

        return response;
    }

    async getPosts() {
        const response = await axios.get('/posts');

        return response;
    }

    async getPost(id) {
        const response = await axios.get(`/posts/${id}`);

        return response;
    }



    async login(data) {
        const response = await axios.post('/auth/login', data);

        return response;
    }

    async logout() {
        const response = await axios.post('/auth/logout', {});

        return response;
    }

    async register(data) {
        const response = await axios.post('/auth/register', data);

        return response;
    }

    async verify(url) {
        const response = await axios.get(url);

        return response;
    }


}
