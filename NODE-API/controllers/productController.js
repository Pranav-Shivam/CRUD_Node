const Product=require("../model/Product");
//Get All Product Details
const product_All=async(req,res)=>{

    try{
        const products=await Product.find();
        res.json(products);
    }
    catch(error)
    {
        res.json({message:error});
    }
};


//Get All Product Details
const product_Details=async(req,res)=>{
    try{
        const products=await Product.findById(req.params.productId);
        res.json(products);
    }
    catch(error)
    {
        res.json({message:error});
    }
};

//Get All Product Details
const product_Create=async(req,res)=>{
    const product=new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });
    try {
        const savedProduct= await product.save();
        res.json(savedProduct);

    } catch (error) {
        res.status(400).send(error);
    }
};

//Get All Product Details
const product_Delete=async(req,res)=>{
    try {
        const removeProduct=await Product.findByIdAndDelete(req.params.productId);
        res.json({message:error});

    } catch (error) {
        res.json({message:error})
    }
};

// Update product
const product_Update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports={
    product_All,
    product_Details,
    product_Create,
    product_Update,
    product_Delete
};
