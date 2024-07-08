const { Router } = require('express');
const router = Router();
 const { getCategory, addCategory, deleteCategory,getCategoryById,
  updateCategory, } = require('../controllers/categoryController');
const { upload } = require('../middlewares/multer');

router.get('/', getCategory);
router.post("/",upload.single('image'), addCategory);
router.delete("/", deleteCategory);
router.get('/:id', getCategoryById);
router.patch("/",upload.single('image'),updateCategory);

module.exports = router;
