const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080");
});

app.use(express.static(path.join(__dirname, "public")));

router.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});



app.use(router)

