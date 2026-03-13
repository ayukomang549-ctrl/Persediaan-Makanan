const express = require("express");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'inventory-secret-key-123',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } 
}));

const makananRoutes = require("./routes/makanan");
app.use("/", makananRoutes);

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));