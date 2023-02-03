const express = require('express');
const fs = require('fs');
const app = express();

var categories = [];
var posts = [];



 module.exports.initialize = function() {

    return new Promise((resolve , reject) => {
        fs.readFile('./data/posts.json', function(err, data)
        {
            if(!err) 
            {
                posts = JSON.parse(data);
                console.log('INITIALIZE POSTS');
            }
            else
            {
                throw (err)
            }
        
    
        fs.readFile('./data/categories.json' , (err, data) => {
            if(!err) 
            {
                categories = JSON.parse(data);
                console.log('INITITALIZE CATEGORIES');
            }
            else
            {
                throw (err)

            }
        });
    });
});
} 

 

 module.exports.getAllPosts = function() {
    return new Promise ((resolve , reject) => {
        if(posts.length > 0)
        {
            resolve (posts)
        }
        else
        {
            reject("no results returned")
        }
    })
}


module.exports.getPublishedPosts = function() 
{
   return new Promise((resolve, reject) => {
    var published = posts.filter(posts => posts.published === true)
    if(published.length > 0)
    {
       resolve(published);
    }
    else
    {
       reject("no results returned");
    }
   })
}


 module.exports.getCategories = function() {
   return new Promise ((resolve , reject) => {
       while(categories.length > 0){
           resolve (categories)
        }
        while(categories.length == 0)
        {
            reject("no results returned")
        }
       })

 };