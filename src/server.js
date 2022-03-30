import { once } from "events";
import { createServer } from "http";
import { randomUUID } from "crypto";

const dataBase = new Map();

const responseJSON = (data, response) => response.end(JSON.stringify(data));

async function handler(request, response) {
  const { method, url, query } = request;
  // console.log("aaaaaaaaaaaa", request);

  if (method === "GET" && url === "/") {
    return responseJSON([...dataBase.values()], response);
  }
  if (method === "POST" && url === "/") {
    const body = JSON.parse(await once(request, "data"));

    const id = randomUUID();

    dataBase.set(id, body);
    return responseJSON({ ok: 1 }, response);
  }

  if (method === "POST" && url === "/users/") {
    console.log("caiue");
    const body = JSON.parse(await once(request, "data"));

    console.log("body", body);

    // dataBase.set(id, body);
    return responseJSON({ ok: 1 }, response);
  }
  if (method === "GET" && url === "/users/:id") {
    console.log("caiue");

    response.end("AAAAAAAAAAAAA");
  }
  if (method === "DELETE") {
    dataBase.clear();
    return responseJSON({ ok: 1 }, response);
  }
}

export default createServer(handler);
