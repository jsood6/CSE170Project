var looksDataAdd = require("../looks.json");
var productsData = require("../products.json");

exports.addLooks = function(req, res){
	var newLook = {
		"imageURL" : req.query.lookImage
		
	};

	console.log(newLook);
	looksDataAdd.looks.push(newLook);
	console.log(looksDataAdd);
	//productsData['products'].push(newProduct);
	//delete productsData.products[5];
	/*delete productsData.products[6];
	delete productsData.products[7];
	delete productsData.products[8];*/
	/*delete productsData.products[9];
	delete productsData.products[10];*/
	
	res.render('myProducts', {productsData,looksDataAdd});

};
