import axios from 'axios';

export default class RatingService {

    get(id, callback) {
        axios.get('/api/rating/' + id)
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
        axios.post('/api/rating', data)
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
        axios.put('/api/rating/' + id, data)
                .then(function (response) {
                    console.log('Updated');
                    callback();
                })
                .catch(function (response) {
                    callback();
                });
    }

    delete(id, callback) {
        axios.delete('/api/rating/' + id)
                .then(function (response) {
                    callback();
                })
                .catch(function (response) {
                    console.log('Error deleting');
                    callback();
                });
    }
}