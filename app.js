var express=require('express');
var app=express();
//var bodyParser = require('body-parser');
//var path = require('path');
app.set('views', './views');
//app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs'); 
//app.use(bodyParser.urlencoded({extended: true}));
// const books={
    // "id":"1",
    // "name":"aaa",
    // "img":"/images/har.jpeg"
// }

 const books=[
    
    {
         "_id":"1111",
        "name":"HarryPotter",
        "author": "Rowling" ,
       "img":"/images/har.jpeg"
    },
     {
         "_id":"1112",
         "name":"NewMoon",
         "author":"StephenieMeyer",
         "img":"/images/moon.jpeg"
     },
     {
         "_id":"1113",
         "name":"TheOdyssey",
         "author":"Homer",
         "img":"/images/od1.jpeg"
    },
     {
         "_id":"1114",
         "name":"WarAndPeace",
         "author": " LeoTolstoy",
         "img":"/images/war.jpeg"

     },
    {
         "_id":"1115",
         "name":"RomeoandJuliet" ,       
         "author": "WilliamShakespeare",
         "img":"/images/ro.jpeg" 
     }
 ] 
 const about="As a physical object, a book is a stack of usually rectangular pagesoriented with one edge tied,  sewn, or otherwise fixed together and then bound to the flexible spine of a protective cover of heavier,relatively inflexible material. The technical term for this physical arrangement is codex. ";
const menu=[
    {link:'/',name:'home'},
    {link:'/books',name:'Books'},
    {link:'/about',name:'About'},
    {link:'/authors',name:'Authors'},
]
const authors=["Rowling" ,"StephenieMeyer","Homer"," LeoTolstoy","WilliamShakespeare"];
//var routes=require('./routes/route.js');
app.use(express.static(__dirname+'/public'));
//app.set('views', __dirname + '/views');
app.get('/',(req,res)=>{
    res.render('home',{title:'My Bookapp',
                       headline:'Book has something to say',
                 menu:menu})
});
app.get('/books',(req,res)=>{
    res.render('books',{title:'My Bookapp',
                 headline:'Book has something to say',
                 menu:menu,
                  books:books})
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'My Bookapp',
                 headline:'Book has something to say',
                 menu:menu,
                  about:about})
});
app.get('/authors',(req,res)=>{
    res.render('authors',{title:'My Bookapp',
                 headline:'Book has something to say',
                 menu:menu,
                  authors:authors})
});
//app.get('/:books',routes.books);
//app.use(express.static('files'));
var port=process.env.port||8500;
var server=app.listen(port,function(req,res){
console.log("server listen on port 8500");
});

