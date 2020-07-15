module.exports = (app) => {
  app.route('/')
    .get(async (req, res) => {
      res.status(200).send('Hello World');
    });
}