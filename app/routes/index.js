module.exports = (app) => {
  app.route('/')
    .get(async (req, res) => {
      res.status(200).send('Hello World');
    });

  app.post('/post', function(req, res){
    res.status(200).send(JSON.stringify(req.body));
  });
}