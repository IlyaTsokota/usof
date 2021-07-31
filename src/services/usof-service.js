export default class UsofService {
    _apiResource = 'http://159.224.0.212/usof-backend/public/index.php/api';

    async getData() {
        const data = await fetch(`${this._apiResource}/categories`)
            .then(response => response.json());

        return data;
    }
}
