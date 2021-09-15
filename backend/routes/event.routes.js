//const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/event.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/events/create", controller.create);
  app.delete("/events/:id", controller.delete);

  app.get("/events", controller.getMyEvents);

  //app.post("/events/:event_id/delete", controller.delete);

  //app.post("/events/:event_id/update", controller.update);
};