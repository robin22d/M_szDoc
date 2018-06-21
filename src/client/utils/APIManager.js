import superagent from 'superagent';

const serverUrl = 'http://localhost:9090/api/v1/';

export default {

  // get request to get a certain amount of boots
  get: (url, params, counter, callback) => {
    superagent
      .get(serverUrl + url + '/' + counter)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null);
          return;
        }

        const confirmation = response.body.confirmation;

        if (confirmation !== 'success') {
          callback({ message: response.body }, null);
          return;
        }
        callback(null, response.body);
      });
  },

  // a get request to trigger the api to get the database to run a search
  search: (url, params, value, counter, callback) => {
    superagent
      .get(serverUrl + url + '/' + value + '/' + counter)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null);
          return;
        }

        const confirmation = response.body.confirmation;

        if (confirmation !== 'success') {
          callback({ message: response.body }, null);
          return;
        }
        callback(null, response.body);
      });
  }

};
