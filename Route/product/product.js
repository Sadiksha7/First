const express = require('express')
const route = express.Router()

const productController = require ('./../../Controller/product/product')

route.get('/add-product', productController.getAddProduct)

route.get('/view-product', productController.getViewProduct)
route.get('/edit-product', productController.getEditProduct)
route.get('/delete-product/:id', productController.getDeleteController)



route.get('/add-categories', productController.getAddCategories)
route.get('/view-categories', productController.getViewCategories)

route.get('/edit-categories', productController.getEditCategories)


route.get('/add-subcategories', productController.getAddSubCategories)
route.get('/view-subcategories', productController.getViewSubCategories)



// /* start file handling  */
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//         cb(
//             null,
//             new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
//         );
//     },
// });

// let filehandler = app.use(
//     multer({
//         storage: fileStorage,
//         fileFilter: fileFilter
//     }).single("image")
// );
// /* end file handling  */



// route.post("/edit-product/:name", productController.postEditProduct)
// route.post("/edit-product/:name", productController.postEditProduct)

// route.get('/view-product/:id', productController.postViewProduct)
// route.get('/add-product/:id', productController.getAddProduct)

// route.get("/edit-product/:id", productController.getEditProduct)

route.post("/add-product", productController.postAddProduct)
// route.post("/edit-product/:id", productController.postEditProduct)

module.exports=route