const database = require("./database_connection");

module.exports = {
    dogs: {
        getAll(){
            return database("dog").select();
        },
        getOne(id){
            return database("dog").select().where("id", id).first();
        },
        add(dog){
            return database("dog").insert(dog).returning("*");
        }
    }
};
