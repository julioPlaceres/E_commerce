const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // finds all categories, including its associated Products
    const data = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(data)
  }
  catch (err) { res.status(500).json(err); }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value including its associated Products
    const data = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }]
    });
    categoryData == null ? console.log("id Not Found") : res.status(200).json(data)
  }
  catch (err) { res.status(500).json(err) }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const data = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(data);
  }
  catch (err) { res.send.status(500).json(err); }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(
      { 
        category_name: req.body.category_name 
      },
      {
        where: { id: req.params.id }
      });
      res.status(200).json(data)
  }
  catch (err) { res.status(500).json(err); }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(data)
  }
  catch (err) { res.status(500).json(data); }
});

module.exports = router;
