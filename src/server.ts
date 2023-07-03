import express, { response } from "express";
import { request } from "http";

const app = express();
const port = 3000;

let var1 = "string";

app.use(express.json());

app.get("/api/variable", (request, response) => {
  response.json(var1);
});

app.post("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json(var1);
});

app.delete("/api/variable", (request, response) => {
  var1 = "";
  response.json({ status: "success" });
});

app.put("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json(var1);
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
