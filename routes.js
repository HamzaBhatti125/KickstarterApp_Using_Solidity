const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index") // (path that shows on url, actual component which we want to show)
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new")

module.exports = routes;
