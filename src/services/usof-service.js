import axios from "axios";

function setToken(token) {
    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
}

function defaultSettings() {
    axios.defaults.baseURL = 'http://localhost/usof/public/index.php/api';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    setToken(localStorage.getItem('token'));
}

defaultSettings();

export default class UsofService {
    async getUsers() {
        const response = await axios.get('/users');

        return response;
    }

    async search(data) {
        const response = await axios.get('/posts/search', {
            params: {
                ...data,
            }
        });

        return response;
    }

    async getCategories() {
        const response = await axios.get('/categories');

        return response;
    }

    async getPosts(data) {
        const response = await axios.get('/posts', {
            params: {
                ...data,
            }
        });

        return response;
    }

    async getPost(id) {
        const response = await axios.get(`/posts/${id}`);

        return response;
    }

    async login(data) {
        const response = await axios.post('/auth/login', data)
            .then((resp) => {
                setToken(resp.data.token);
                return resp;
            });

        return response;
    }

    async logout() {
        const response = await axios.post('/auth/logout');
        setToken(null);
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

    async getLikes(id) {
        const response = await axios.get(`/posts/${id}/like`);
        return response;
    }

    async addLike(id) {
        const response = await axios.post(`/posts/${id}/like`);
        return response;
    }

    async addDislike(id) {
        const response = await axios.post(`/posts/${id}/dislike`);
        return response;
    }

    async removeLike(id) {
        const response = await axios.delete(`/posts/${id}/like`);
        return response;
    }

    async removePost(id) {
        const response = await axios.delete(`/posts/${id}`);
        return response;
    }

    async removeDislike(id) {
        const response = await axios.delete(`/posts/${id}/dislike`);
        return response;
    }

    async addAnswer({id, content}) {
        const response = await axios.post(`/posts/${id}/comments`, {content});
        return response;
    }

    async getAnswers(id) {
        const response = await axios.get(`/posts/${id}/comments`);
        return response;
    }

    async getMyPosts(data) {
        const response = await axios.get(`/posts/my`, {
            params: {
                ...data,
            }
        });

        return response;
    }

    async createPost(data) {
        console.log(data)
        const response = await axios.post('/posts', {
            title: data.title,
            'category_id': [+data.category],
            body: data.body,
        });

        return response;
    }
}
