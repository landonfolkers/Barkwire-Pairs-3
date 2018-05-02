exports.up = function(knex, Promise) {
    return knex.schema.createTable("dog", dog => {
        dog.increments();
        dog.string("name");
        dog.string("profilePicture");
        dog.string("bio");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropIfExists("dog");
};
