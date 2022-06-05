require("dotenv").config()

const auth = (req, res, next) => {
    const api_token = req.headers.api_token;
    if (!api_token) {
        return res.status(401).send({output: `Insira o api token no header`});
    }

    if (api_token !== process.env.api_token) {
        return res.status(401).send({output: `Insira o api token valido`});
    }
    next();
}
module.exports = auth;