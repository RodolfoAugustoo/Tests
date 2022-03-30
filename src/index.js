import Server from "./server.js";

const server = Server.listen(4000).on("listening", () =>
  console.log(`running at: ${server.address().port}`)
);
