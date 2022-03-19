import express from "express";
import mongodb from "mongodb";
import cors from "cors";

const app = express();
const PORT = 7967;

const mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
mongoClient.connect();

const db = mongoClient.db("shirtShop");
const collectionShirts = db.collection("shirts");
//const collectionWisdom = db.collection("wisdom");

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

app.get("/shirts", async (request, response) => {
  const query = request.query;

  console.log("You got what you asked for!");
  let filter = {};

  const shirts = await collectionShirts.find(filter).toArray();
  response.json(shirts);
});

app.post("/shirts", async (request, response) => {
  const shirtPic = request.body;

  console.log("You added an item to your shirts-collection");

  await collectionShirts.insertOne(shirtPic);
  response.status(200).end();
});

app.listen(PORT, () => {
  console.log(`WisdlShirt is up running @ http://localhost:${PORT}`);
});
