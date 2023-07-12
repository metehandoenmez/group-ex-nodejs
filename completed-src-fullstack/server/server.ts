import cors from "cors";
import { randomUUID } from "crypto";
import express, { Request, Response } from "express";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

type Item = {
  id: number;
  content: string;
};

let itemsArr: Item[] = [];
let currentId = 1;

app.get("/api/items", (req, res) => {
  res.json({ list: itemsArr });
});

app.post("/api/items", (req: Request, res: Response) => {
  var value = req.body.value;
  itemsArr.push({
    id: currentId,
    content: value,
  });
  currentId = currentId + 1;
  res.json({ status: "ok", list: itemsArr });
});

app.delete("/api/items/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  itemsArr = itemsArr.filter((el) => el.id !== id);
  res.json({ list: itemsArr });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
