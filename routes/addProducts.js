var productsData = require("../products.json");

exports.addProducts = function(req, res){
	var newProduct = {
		"imageURL" : 'http://lorempixel.com/400/400/people',
		"productName" : " "
	};

	productsData.products.push(newProduct);
	//productsData['products'].push(newProduct);
	//delete productsData.products[5];
	/*delete productsData.products[6];
	delete productsData.products[7];
	delete productsData.products[8];*/
	/*delete productsData.products[9];
	delete productsData.products[10];*/
	
	res.render('myProducts', productsData);

};
