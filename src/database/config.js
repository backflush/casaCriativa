const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/casaCriativa.db");

db.serialize(function(){
    // Create table
    db.run(`CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );`); 

    // Truncate data from ideas
    // db.run("DELETE FROM ideas");

    // Insert data in table
    // const query = `INSERT INTO ideas(
    //     image, 
    //     title, 
    //     category, 
    //     description, 
    //     link) VALUES (?, ?, ?, ?, ?)`;
    // const value = [
        
    // ]
    // db.run(query, value, function(err){
    //         if(err){
    //             return console.log(err);
    //         }
    //         else{
    //             console.log(this);
    //         }
    // });
    
    // Search data in table
    // db.all("SELECT * FROM ideas", function(err, rows){
    //     if(err){
    //         return console.log(err);
    //     }
    //     else{
    //         console.log(rows);
    //     }
    // });
    
    // Delete data in table
    // db.run("DELETE FROM ideas WHERE id = ?", [1], function(err){
    //     if(err){
    //         return console.log(err);
    //     }
    //     else{
    //         console.log("Delted",this);
    //     }
    // });
});

module.exports = db;