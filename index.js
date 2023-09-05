//? DAY 1 (Creating api)                    

// const express = require("express");
// const app = express();

// app.use(express.json())
// let arr = []

// app.get("/", (req, res) => {
//   let bodi = req.body
//   bodi.id = arr.length + 1
//   arr.push(bodi)
//   console.log(bodi);
//   res.send({msg:bodi , ID : bodi.id});
// });

// app.listen(3003, () => {
//   console.log((`server has been started at port 3003`));
// });
  
//? practise  

const express = require("express");
const cors = require("cors");
const app = express();
const shortid = require("shortid");
const urlMap = {};

app.use(cors()); 
app.use(express.json());

app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate(); 
  urlMap[shortUrl] = longUrl;
  // console.log(urlMap);
  console.log(`Your Shorted link : http://localhost:3000/${shortUrl}`);

  res.send({ url: shortUrl });
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  const longUrl = urlMap[shortUrl];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
    console.log();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//* paste this object in postman body 
// {
//   "longUrl": "https://myapi.fyers.in/docs#tag/Authentication-and-Login-Flow-User-Apps/paths/~1Authentication%20&%20Login%20Flow%20-%20User%20Apps/patch"
// }

