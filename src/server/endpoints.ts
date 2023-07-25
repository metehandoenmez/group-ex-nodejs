import express, { Request, Response } from "express";

type Item = {
  id: number;
  content: string;
  timestamp: number;
};

let itemsArr: Item[] = [];
let currentId = 100;

function getItems(req: Request, res: Response) {
  res.json({ list: itemsArr });
}

function addItem(req: Request, res: Response) {
  var value = req.body.value;
  itemsArr.push({
    id: currentId,
    content: value,
    timestamp: Date.now(),
  });

  currentId = currentId + 1;

  res.json({ status: "ok", list: itemsArr });
}

// DELETE http://localhost:3001/api/items/2

function deleteItem(req, res) {
  const id = Number(req.params.id);
  itemsArr = itemsArr.filter((item) => item.id !== id);
  res.json({ status: "ok", list: itemsArr });
}

function updateItem(req: Request, res: Response) {
  const id = Number(req.params.id);
  var value = req.body.value;

  // update the itemsArr element with the new text.

  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].id === id) {
      itemsArr[i].content = value;
    }
  }

  itemsArr.forEach((element) => {
    if (element.id === id) {
      element.content = value;
    }
  });

  res.json({ status: "ok", list: itemsArr });
}

export { getItems, addItem, deleteItem, updateItem };
