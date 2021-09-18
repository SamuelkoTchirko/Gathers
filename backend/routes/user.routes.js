const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/people/find/:query", controller.findByUsername);

  //app.post("/events/:event_id/delete", controller.delete);

  //app.post("/events/:event_id/update", controller.update);
};