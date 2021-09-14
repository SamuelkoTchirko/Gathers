//const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/event_participant.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/events/:event_id/join",
    //[
    //  verifySignUp.checkDuplicateUsernameOrEmail,
    //  verifySignUp.checkRolesExisted
    //],
    controller.join
  );

  app.post("/events/:event_id/leave", controller.leave);
};