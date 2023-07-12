import cors from "cors";
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
let currentId = 0;

app.post("/api/items", (req: Request, res: Response) => {
  var value = req.body.value;
  itemsArr.push({
    id: 0,
    content: value,
  });
  currentId++;
  res.json({ status: "ok", list: itemsArr });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
