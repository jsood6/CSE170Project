var productsData = require("../products.json");
var looksData = require("../looks.json");

exports.addProducts = function(req, res){
	var newProduct = {
		"productType" : req.query.productType,
		"productName" : req.query.productName,
		"imageURL" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeK6MExynZT7tEYFipQaFxqPzXyjlzRyG7suMcewbzgIdLfrLjQ'
		
	};

	console.log(newProduct);
	productsData.products.push(newProduct);
	//productsData['products'].push(newProduct);
	//delete productsData.products[5];
	/*delete productsData.products[6];
	delete productsData.products[7];
	delete productsData.products[8];*/
	/*delete productsData.products[9];
	delete productsData.products[10];*/
	
	res.render('myProducts', {productsData,looksData} );

};
 