const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // finds all categories, including its associated Products
    const categoryData = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value including its associated Products
    const categoryId = req.params.id;
    const categoryData = await Category.findOne({
      where: {
        id: categoryId
      },
      include: [{
        model: Product
      }]
    });
    if (categoryData == null) {
      console.log("Not Found");
    }
    else {
      res.json(categoryData);
    }
  }
  catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const data = await Category.create({
      category_name: req.body.category_name
    });
    res.send(200).json(data);
  }
  catch (err) {
    res.send.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      });

    res.json(categoryData);
  }
  catch (err) {
    res.send.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deletedData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(deletedData);
  }
  catch(err){
    res.send.status(200).json(err);
  }
});

module.exports = router;
