const axios = require("axios").default
require("dotenv").config()

const auth = (req, res, next) => {
    const jwt = req.headers.token;

    if (!jwt) {
        return res.status(401).send({output: `Insira o token no header`});
    }

    axios({
        method: 'get',
        url: process.env.validateTokenUrl,
        timeout: 1000,
        headers: {
            'token': jwt,
            'api_token': process.env.api_token,
        }
    }).then(function (response) {
        if (response.data.status) {
            req.content = {
                id: response.data.id
            }
            next();
        } else {
            return res.status(401).send({output: `token not valid`});
        }
    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
        }
        return res.status(401).send({output: error.response.data.output});
    });
}
module.exports = auth;