const Product = require('../models/product');
const Category = require('../models/category')

const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 100, sortField, sortOrder, search, category,
      priceGreaterThan, priceLessThan, priceMin, priceMax, sortDiscount, sortDiscountGreaterThan } = req.query;


    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 100;
    console.log('lim n', limitNumber)

    // Construct the base query
    const query = {};

    // Search functionality
    if (search) {
      const searchRegex = new RegExp(search, 'i');
      query.$or = [
        { name: searchRegex },
        { brand: searchRegex }
        // Add additional fields for search as needed
      ];
    }

    // Category filter
    if (category) {
      query.category = category;
    }

    // Sorting
    const sortOptions = {};
    if (sortField && sortOrder) {
      sortOptions[sortField] = sortOrder === 'asc' ? 1 : -1;
    }

    // Price greater than functionality
    if (priceGreaterThan) {
      query.sale_rate = { $gt: parseInt(priceGreaterThan) };
    }

    // Price less than functionality
    if (priceLessThan) {
      query.sale_rate = { $lt: parseInt(priceLessThan) };
    }

    // Price range functionality
    if (priceMin && priceMax) {
      query.sale_rate = { $gte: parseInt(priceMin), $lte: parseInt(priceMax) };
    }

    if (sortDiscount) {
      query.discount = parseInt(sortDiscount);
    }

    // Sort by discount greater than functionality
    if (sortDiscountGreaterThan) {
      query.discount = { $gt: parseInt(sortDiscountGreaterThan) };
    }

    // Find products based on the constructed query
    const totalProducts = await Product.countDocuments(query);
    console.log('tpro', totalProducts)
    const products = await Product.find(query)
      .collation({ locale: 'en' }) // Enable case-insensitive search
      .sort(sortOptions)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);
    //const data = await Product.find()
    res.status(200).json({ data: products })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const getProductById = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id }).populate('category')
    res.status(200).json({ data, message: 'product found successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}

const addProduct = async (req, res) => {
  try {
    console.log(req.files);
    const { name, subheading, category, brand, price, stock, discount, sale_rate, description } = req?.body
    if (req.files.length != 0) {
      const product = new Product({
        name, subheading, category, brand, price, stock, discount, sale_rate, description,
        image: req.files.map((x) => x.filename)
      });
      console.log(product);
      await product.save();
      if (product) {
        await Category.updateOne({ _id: category }, { $push: { products: product._id } })
        res.status(200).json({ message: "Product added successfully !" });

      } else {
        res.status(400).json({ message: "Something went wrong !" });
      }
    } else {
      res.status(400).json({ message: "failed only jpg ,jpeg, webp & png file supported !" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const updateProduct = async (req, res) => {
  console.log(req?.body)
  try {
    const { _id, name, subheading, brand, price, stock, discount, sale_rate, description, type1, type2, type3, image } = req?.body
    // const images = JSON.parse(image) ?? []
    let images = [];
    try {
      images = JSON.parse(image) ?? [];
    } catch (e) {
      console.error("Failed to parse image JSON:", e);
    }

    if (req?.files?.length != 0) {
      req?.files?.map((x) => images.push(x.filename))
    }
    await Product.updateOne({ _id }, {
      $set: { name, subheading, brand, price, stock, discount, sale_rate, type1, type2, type3, description, image: images }
    })
    res.status(200).json({ message: "Product updated successfully !" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'product deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}



const clientGetProducts = async (req, res) => {
  console.log('clientGetProducts');
  const { page = 1, limit = 9 } = req.query;
  console.log('page', page, limit);

  try {
    const products = await Product.find()
      .populate('category', 'name')
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalProducts = await Product.countDocuments();
    res.json({ products, totalPages: Math.ceil(totalProducts / limit), currentPage: Number(page) });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
}
module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  addProduct,
  deleteProduct,
  clientGetProducts
}
