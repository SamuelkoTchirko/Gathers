const controller = require("../controllers/friend.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/friend/add", controller.createRequest);

  app.get("/friends/requests", controller.getRequests);

  //app.post("/events/:event_id/delete", controller.delete);

  //app.post("/events/:event_id/update", controller.update);
};