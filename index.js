import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "123456789",
    port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

let books =[];
app.get("/",async (req,res)=>{
    try{
        const result = await db.query("SELECT * FROM books");
        const books = result.rows;
        res.render("index.ejs",{books : books});
    }
    catch(err){
        console.error(err);
    }
});

app.post("/add",async (req,res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const rating = req.body.rating;

    try{
        await db.query("INSERT INTO books(title, author, rating) VALUES ($1, $2 ,$3)",[title,author,rating]);
        res.redirect("/");
    }
    catch(err){
        console.error(err);
    }
});

// Update - Edit an existing book
app.post('/edit/:id', async (req, res) => {
    const title = req.body.editTitle;
    const author = req.body.editAuthor;
    const rating = req.body.editRating;
    const bookId = req.params.id;

    try {
        await db.query('UPDATE books SET title = $1, author = $2, rating = $3 WHERE id = $4', [title, author, rating, bookId]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
    }
});

//Delete Book
app.post("/delete/:id",async (req,res)=>{
    const bookId = req.params.id;

    try{
        await db.query("DELETE FROM books WHERE id = $1 ",[bookId]);
        res.redirect("/");
    }
    catch(err){
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`Serving On Port ${port}`)
})