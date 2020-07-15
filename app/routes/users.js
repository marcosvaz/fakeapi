module.exports = (app) => {
  const md5 = require('md5'); // Biblioteca de criptografia

  const moment = require('moment-timezone'); // Biblioteca de data/hora
  moment.tz("America/Sao_Paulo").format()

  const data = require('../data') // Dados fake para teste

  const jwt = require('jsonwebtoken'); // Biblioteca de autenticação

  const _ = require('lodash');
  require('deepdash')(_);

  // Validation
  const verifyJWT = (req, res, next) => {
    try {
      let token = req.headers['x-access-token'] || req.headers['authorization'];
      if(token){
        if (token.startsWith('Bearer ')) {
          token = token.slice(7, token.length);
        }
    
        jwt.verify(token, process.env.SECRET, function (error, decoded) {
          if (error) return res.status(401).send({
            error_message: "Verifique se o token enviado está correto."
          });
          next();
        });
      } else {
        res.status(400).send({
          error_message: "Verifique se os dados enviados estão corretos e tente novamente."
        })
      }
    } catch (error) {
      res.status(500).send({
        error: error.response.data
      })
    }
  }

  // GET ALL USERS
  app.route('/users')
    .get(async (req, res) => {
      const { users } = data

      const result = _.omitDeep(users, ["_uuid", "email", "password"]);

      res.status(200).send(result);
    });

  // GET USER by NAME
  app.get('/users/:user_name', verifyJWT, async (req, res) => {
    const { users } = data;
    const { user_name } = req.params;

    const result = _.omitDeep(users, ["_uuid", "email", "password"]);

    const response = result.filter(
      user => user.name.toLowerCase()
        .includes(
          user_name.toLowerCase()
        )
    )

    res.status(200).send(response);
  });

  // Authentication
  app.route('/user/authentication')
    .post(async (req, res) => {
      try {

        // If exists email and password in requisition body
        if(req.body.email && req.body.password){

          const { email, password } = req.body;
          
          /* 
            Filter data.users where 
            user.email is equal to email and 
            user.password is equal to criptografed password
          */
          if(
            data.users.filter(
              user => user.email === email && user.password === md5(password)
            ).length === 1
          ) {
            const result = data.users.filter(
              user => user.email === email && user.password === md5(password)
            )

            const { _uuid } = result[0];
            var token = jwt.sign({ _uuid }, process.env.SECRET, {
              expiresIn: (60 * 15) // 60s * 15
            });

            res.status(200).send({
              access_token: token
            });
          } 
          
          /*
            Else if filter data.users where
            user.email is equal to email and
            user.password is different of criptografed password
          */
          else if (
            data.users.filter(
              user => email === email && md5(password) !== user.password
            )
          ) {
            res.status(401).send({
              error_message: "E-mail/senha incorretos."
            })
          }
        } 
        
        /*
          Else sends a status 422
          and a error message
        */
        else {
          res.status(422).send({
            error_message: "Verifique se os dados enviados estão corretos e tente novamente."
          })
        }

      /*
        Catch another errors
        and sends a status 500
        with error response
      */
      } catch (error) {
        res.status(500).send({
          error: error.response.data
        })
      }
    })
}