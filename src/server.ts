import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// var var1 = "hello metehan";

let planetsArr: {
  id: number;
  name: string;
}[] = [];

let currentId: number = 0;

app.get("/api/planets", (request, response) => {
  response.json({
    planets: planetsArr,
    currentId: currentId,
  });
});

app.post("/api/planets", (request, response) => {
  const { value } = request.body;
  planetsArr.push({
    id: currentId,
    name: value,
  });
  currentId = currentId + 1;
  response.json({
    status: "success",
  });
});

app.put("/api/planets/:id", (request, response) => {
  const { value } = request.body;
  let { id } = request.params;
  for (let i = 0; i < planetsArr.length; i++) {
    const planet = planetsArr[i];
    if (Number(id) === planet.id) {
      planet.name = value;
    }
  }
  response.json({
    status: "updated",
  });
});

app.delete("/api/planets/:id", (request, response) => {
  let { id } = request.params;

  planetsArr = planetsArr.filter((planet) => planet.id !== Number(id));

  response.json({
    status: "deleted",
  });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});
