const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
    res.json({
        name: "BE-01",
        version: "1.0.0",
        status: "OK"
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});