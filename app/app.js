const express = require("express");
const app = express();

// Middleware
const path = require("path");
app.use(require("node-sass-middleware")({
    src: __dirname,
    dest: path.join(__dirname, "public", "stylesheets"),
    prefix: "/stylesheets",
    outputStyle: "compressed",
    indentedSyntax: false,
    sourceMap: true
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// View Routes
app.get("/", (request, response) => {
    response.redirect("/dogs");
});
app.get("/dogs", (request, response) => {
    response.render("dogs");
});
app.get("/dogs/new", (request, response) => {
    response.render("addDog")
});
app.get("/dogs/:id", (request, response) => {
    response.render("dog");
});
// API Routes
const queries = require("./data/queries");
app.get("/api/dogs", (request, response) => {
    queries.dogs.getAll(request.params.id).then(dogs => {
        response.json({ dogs });
    });
});
app.get("/api/dogs/:id", (request, response) => {
    queries.dogs.getOne(request.params.id).then(dog => {
        response.json({ dog });
    });
});
app.post("/api/dogs", (request, response) => {
    queries.dogs.add(request.body).then(dog => {
        response.status(201).json({ dog });
    });
});

module.exports = app;
