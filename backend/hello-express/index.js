import express from "express";
import mongodb from "mongodb";
import cors from "cors";

const app = express();
const PORT = 7967;

const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
mongoClient.connect();

const db = mongoClient.db("shirtShop");
const collectionShirts = db.collection("products");
const collectionCart = db.collection("cart");
const collectionWisdom = db.collection("orders");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", //3000 is where is my react app is running
  })
);

const requestLogger = (request, response, nextCallback) => {
  //const timestamp = new Date().toISOString();
  const method = request.method;
  const url = request.url;

  //console.log(`${timestamp} ${method} ${url}`);
  nextCallback();
};

app.use(requestLogger);

const database = [];

app.get("/products", async (request, response) => {
  const query = request.query;

  console.log("You got what you asked for!");
  let filter = {};

  const cart = await collectionShirts.find(filter).toArray();
  response.json(cart);
});

app.post("/products", async (request, response) => {
  const shirtPic = request.body;

  console.log("You added an item to your cart-collection");

  await collectionShirts.insertOne(shirtPic);
  response.status(200).end();
});

app.delete("/products/:productsId", async (request, response) => {
  const selectedShirt = request.params.productsId;
  console.log(selectedShirt);

  const documentCount = await collectionShirts.count({ _id: selectedShirt });
  const cartExists = documentCount === 1;

  if (cartExists) {
    await collectionShirts.deleteOne({ _id: selectedShirt });
    response.sendStatus(200);
  } else {
    response.sendStatus(404);
  }
});

app.patch("/products/:productsId", async (request, response) => {
  const selectedShirt = request.params.cartId;
  const requestBody = request.body;

  //We made our OWN ID
  await collectionShirts.updateOne(
    { _id: selectedShirt },
    { $set: requestBody }
  );
  //await collectionShirts.replaceOne({ _id: theSelectedDogId }, requestBody);
  response.status(200).end();
});

app.listen(PORT, () => {
  console.log(`WisdlShirt is up running @ http://localhost:${PORT}`);
});
