import axios from 'axios';

export default class UserService {

    get(id, callback) {
        axios.get('/api/user/' + id)
                .then((response) => {
                    console.log(response);
                    callback(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    callback(null);
                });
    }

    add(data, callback) {
        axios.post('/api/user', data)
                .then(function (response) {
                    console.log(response);
                    callback();
                })
                .catch(function (error) {
                    console.log(error);
                    callback();
                });
    }

    update(id, data, callback) {
        axios.put('/api/user/' + id, data)
                .then(function (response) {
                    console.log('Updated');
                    callback();
                })
                .catch(function (response) {
                    callback();
                });
    }

    delete(id, callback) {
        axios.delete('/api/user/' + id)
                .then(function (response) {
                    callback();
                })
                .catch(function (response) {
                    console.log('Error deleting');
                    callback();
                });
    }
}