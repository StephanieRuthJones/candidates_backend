
exports.up = function (knex) {
    return knex.schema.createTable('candidates', table => {
        table.increments("id")
        table.string("name").notNullable().defaultsTo("")
        table.string("image", 10000).notNullable().defaultsTo("")
        table.string("description", 10000).notNullable().defaultsTo("")
        table.integer("votes").notNullable().defaultsTo(0)

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('candidates')
};