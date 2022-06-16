exports.seed = function (knex, Promise) {
    return knex('steps').insert([
        { recipe_name: 'Cereal', step_number: 1, step_instructions: 'Pour cereal into bowl' },
        { recipe_name: 'Cereal', step_number: 2, step_instructions: 'Add milk to bowl' },
        { recipe_name: 'Grilled Cheese Sandwhich', step_number: 1, step_instructions: 'Put in cheese' },
        { recipe_name: 'Grilled Cheese Sandwhich', step_number: 2, step_instructions: 'Grill it' }
    ])
}