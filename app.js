const express = require("express")
const path = require("path")
const port = process.env.PORT || 2366
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//  Routes
app.get("/books", (req, res) => {
  res.render("./books/index")
})

app.get("/random", (req, res) => {
  const rand = Math.floor(Math.random() * 100) + 1
  res.render("./books/random", { rand: rand })
})

app.listen(port, () => {
  console.log(`App Running On Port ${port}`)
})
