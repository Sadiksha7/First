
  const PRODUCT = require('./../../model/product')
exports.getAddProduct = (req, res)=>{ 
    res.render('product/add-product')
 
  }
  exports.getAddCategories = (req, res)=>{
    res.render('categories/add-categories')
  }
  exports.getViewCategories = (req, res)=>{
    res.render('categories/view-categories')
  }

exports.getEditCategories = (req, res)=>{
  res.render('categories/edit-categories')
}

  exports.getAddSubCategories = (req, res)=>{
    res.render('sub-categories/add-subcategories')
  }
  exports.getViewSubCategories = (req, res)=>{
    res.render('sub-categories/view-subcategories')
  }
  
  exports.getEditProduct = (req, res)=>{
    res.render('product/edit-product')
  }
  






//   exports.getAddProduct = (req, res) => {
//     // let data = req.flash('message')
//     res.render('/product/add-product', {
//         // message: data,
//     })
// }


// exports.postAddProduct = (req, res) => {
//     console.log(req.file);
//     if(!req.body.user && !req.body.name && !req.body.description) {
//         res.redirect("/product/add-product");
//         return
//     } else {
//         let data = {
//             ...req.body,
//             image: req.file.filename
//         }
//         Product.create({...data})
//         .then(result => {
//             req.flash('message', 'Product Added Successfully!')
//             res.redirect("/product/add-product");
//             console.log("success")
//         })
//         .catch(err => {
//             req.flash('message', 'Product Adding Failed')
//             console.log(err)
//         })
//     }
// }


//For adding product 
exports.postAddProduct = (req, res) => {
    PRODUCT.create({...req.body})
    .then(result => {
        console.log(result)
    })
        .catch(err => {
            console.log(err)
        })
      }




        exports.getViewProduct=(req, res) => {
          console.log("hello")
            PRODUCT.find()
            .then(result=>{
                res.render("product/view-product", {
                    data: result
                })
            })
            .catch(err=> {
                console.log(err)
            })
        }

        
        //For delete 
exports.getDeleteController = (req, res) => {
    console.log(req.params.id)
    PRODUCT.findByIdAndDelete(req.params.id)
    .then(result => {
           console.log(result)
          })
    .catch(err => {
        console.log(err)
    })
}

// exports.getViewProduct = (req, res) => {
//     Product.findById(req.params.id)
//     .then(result => {
//         res.render("/product/view-product", {
//             data: result
//         });
//     })
//     .catch(err => {
//         res.redirect("/product/add-product");
//         console.log(err)
//     })
// }

// exports.postViewProduct = (req, res) => {
//     console.log(req);
//     Product.findByIdAndUpdate(req.params.id, {...req.body})
//     .then(result => {
//         res.redirect("/product/add-product");
//     })
//     .catch(err => {
//             res.redirect("/product/add-product");
//         })
// }