const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

class Server {
  constructor() {
    this.PORT = 5050;
    this.app = express();
    this.paths = {
      api: "/api",
    };
    this.middleware();
    this.router();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  router() {
    this.app.use(this.paths.api, require("../routes/openai"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`the application listening on ${this.PORT}`);
    });
  }
}

module.exports = Server;
