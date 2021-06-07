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
    }
}