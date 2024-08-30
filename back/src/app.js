const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require('cors');

const router = require("./routes/index");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

server.use("/rickandmorty", router);

// server.listen(PORT, () => {
//   console.log(`Server raised in port: ${PORT}`);
// });

// const http = require("http");
// const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     // console.log(data);
//     console.log(req.url);
//     if (req.url.includes("/rickandmorty/character")) {
//       let id = Number(req.url.slice(24));

//       getCharById(res, Number(id));
//     }
//     // if (request.url.includes("/rickandmorty/character")) {
//     //   let id = Number(request.url.slice(24));
//     //   console.log(id);
//     //   response.writeHead(200, { "Content-Type": "application/json" });
//     //   response.end(JSON.stringify(data[id - 1]));
//     // }
//   })
//   .listen(3001, "localhost");
module.exports = server;
