var looksDataAdd = require("../looks.json");
var productsData = require("../products.json");

exports.addLooks = function(req, res){
	var newLook = {
		"imageURL" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeK6MExynZT7tEYFipQaFxqPzXyjlzRyG7suMcewbzgIdLfrLjQ'
		
	};

	console.log(newLook);
	looksDataAdd.looks.push(newLook);
	//productsData['products'].push(newProduct);
	//delete productsData.products[5];
	/*delete productsData.products[6];
	delete productsData.products[7];
	delete productsData.products[8];*/
	/*delete productsData.products[9];
	delete productsData.products[10];*/
	
	res.render('myProducts', {productsData,looksDataAdd});

};
