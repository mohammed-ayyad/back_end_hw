const express = require('express');
app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/greeting/*", (req, res) => {
    let z = "/greeting/" 
    let m={"message": "Hello "};
    m.message+=(req.url.slice(z.length, req.url.length));
    res.json(m);
});
app.post("/data", (req, res) => {
    let data=req.body;
    let name={name:"mohammed ayyad 120170515"}
    res.json({...data,...name});
   
})
app.listen(3000);