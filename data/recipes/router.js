const router = require('express').Router()
const Recipe = require('./model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

module.exports = router;