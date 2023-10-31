const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.render("index", {
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
  });
});

app.get("/memberships", (req, res) => {
  res.render("memberships", {
    layout: "layouts/main-layout",
  });
});

app.get("/downloads", (req, res) => {
  res.download("./public/dist/files/Formulir keanggotan AEAI.pdf", (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
