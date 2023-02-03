/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Shubpreet Kaur
   Student ID: 161155213
    Date: 2023-02-02
*
*  Online (Cyclic) Link: 
*
********************************************************************************/ 
var express = require("express");
var app = express();
var fs = require('fs');
var blogdata = require("./blog-service.js");
const path = require('path');
app.use(express.static('public/css'));

  app.use(express.static('public/css'));

  app.get('/', (req, res) => {
    res.redirect("/about");
  });

   app.get('/about', (req, res) => {
     res.sendFile(__dirname + "/views/about.html");
   });


   app.get('/blog', (req, res) => {
    blogdata.getPublishedPosts().then((data) =>
   {
      res.json({data});
   })
  .finally((err) =>
  {
      res.json({Message: error});
    })
     });
  
  
     app.get("/posts", (req, res) => 
     {
      blogdata.getAllPosts().then((data) =>
       {
        res.json({data});
       })
    .finally((err) =>
     {
        res.json({Message: error});
    })
        })
  
  
        app.get("/categories", (req, res) => {
          blogdata.getCategories().then((data) =>
           {
            res.json({data});
        })
        .finally((err) => {
            res.json({Message: error});
        })
            })
           
            app.use((req, res) => {
              res.status(404).send('Page not found');
            });
        
            
            blogdata.initialize().then(() => 
            {
              app.listen(8080)
            }) 
            .finally((err) => 
            {
              console.log('error: promise cant be fulfilled');
            })
            
            app.listen(8080)