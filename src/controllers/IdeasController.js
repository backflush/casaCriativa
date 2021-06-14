const db = require("../database/config");

module.exports = {
    index(req, res) {
        db.all("SELECT * FROM ideas", function(err, rows){
            if(err){
                console.log(err);
                return res.send("Erro no banco de dados.")
            }
            else{
                const reversedIdeas = [...rows];
                return res.render("ideas", { ideas: reversedIdeas });
            }
        });
    },

    create(req, res) {
        const query = `INSERT INTO ideas(
            image, 
            title, 
            category, 
            description, 
            link) VALUES (?, ?, ?, ?, ?)`;
        const value = [
            req.body.image,
            req.body.title,
            req.body.category,
            req.body.description,
            req.body.link,
        ]
        db.run(query, value, function(err){
            if(err){
                console.log(err);
                return res.send("Erro no banco de dados.")
            }
            else{
                return res.redirect("/ideas");
            }
        });
    },
}