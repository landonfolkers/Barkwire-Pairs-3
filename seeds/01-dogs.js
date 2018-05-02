exports.seed = (knex, Promise) => {
    return knex
        .raw("delete from dog;")
    .then(() => {
        return knex.raw("delete from sqlite_sequence where name='dog';")
    })
    .then(() => {
        return knex("dog").insert([{
            name: "Bixby",
            profilePicture: "images/bixby.jpg",
            bio: "Single and ready to mingle!"
        },{
            name: "Mesa",
            profilePicture: "images/mesa.jpg",
            bio: "Want to play catch?"
        },{
            name: "Iago",
            profilePicture: "images/iago.jpg",
            bio: "Bad to the bone."
        }]);
    });
}
