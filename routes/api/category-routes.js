const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finds all categories, including its associated Products
  Category.findAll({
    include: [{
      model: Product,
      attributes: {
        exclude: ["id", "price", "stock", "category_id"]
      }
    }],
  }).then((categoryData) => {
    res.json(categoryData);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
