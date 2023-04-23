const axios = require('axios');

const res = axios
  .post('https://car-mate-t012.onrender.com/api/v1/users/login', {
    email: 'abc1@gmail.com',
    password: 'password',
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
