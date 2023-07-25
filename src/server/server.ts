import cors from "cors";
import express, { Request, Response } from "express";
import { getItems, addItem, deleteItem, updateItem } from "./endpoints.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/api/items", getItems);

app.post("/api/items", addItem);

app.delete("/api/items/:id", deleteItem);

app.put("/api/items/:id", updateItem);

app.listen(port, () => {
  console.log("Server started on port", port);
});
