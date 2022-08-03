const router=require("express").Router();
const productController=require('../controllers/productController');
router.post("/",productController.product_Create);
router.get("/",productController.product_All);
router.get("/:productId",productController.product_Details);
router.put("/:productId",productController.product_Update);
router.delete("/:productId",productController.product_Delete);
module.exports=router;