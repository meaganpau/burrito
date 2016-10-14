$(function () {

var burrito = {
	ingredients: {
		lettuce: {
			calories: 7,
			name: 'Lettuce',
			portionSize: 50
		},

		cheese: { 
			calories: 416, 
			name: 'Cheese',
			portionSize: 100
		},
		tomato: { 
			calories: 9,
			name: 'Tomato',
			portionSize: 50
		},
		tortilla: { 
			calories: 237,
			name: 'Tortilla',
			portionSize: 100
		},
		hotSauce: { 
			calories: 2,
			name: 'Hot Sauce',
			portionSize: 50
		}, 
		beef: {
			calories: 276,
			name: 'Beef',
			portionSize: 100
		},
		sourCream: {
			calories: 214,
			name: 'Sour Cream',
			portionSize: 100
		},
		guacamole: {
			calories: 157,
			name: 'Guacamole',
			portionSize: 100
		},
		salsa: {
			calories: 27,
			name: 'Salsa',
			portionSize: 100
		},
		beans: {
			calories: 339,
			name: 'Beans',
			portionSize: 100
		},
		rice: {
			calories: 130,
			name: 'Rice',
			portionSize: 100
		},
		lime: {
			calories: 3,
			name: 'Lime',
			portionSize: 10
		}
		
	},
	ingredientsList: [],
	burritoCalories: 0,
	addIngredient: function (ingredient) {
		var ingredientInfo = burrito.ingredients[ingredient];
		burrito.burritoCalories += ingredientInfo['calories'];
		burrito.ingredientsList.push(ingredientInfo['name']);
		console.log(`Adding ${ingredient} and adding ${ingredientInfo['calories']}`);

	},
	removeIngredient: function (ingredient) {
		var ingredientInfo = burrito.ingredients[ingredient];
		burrito.burritoCalories -= ingredientInfo['calories'];
		var index = burrito.ingredientsList.indexOf(ingredientInfo['name']); //Required to find index # for splicing
		burrito.ingredientsList.splice(index,1);
		console.log(`Removing ${ingredient} and subtracting ${ingredientInfo['calories']}`);
	} //end of updateCalories function
}; //End of burrito object

function updateView() {
	var htmlList="";

	

	if (burrito.ingredientsList.length === 0) {
		$('.invitation').fadeIn();
	} else {
		
		for (var item in burrito.ingredientsList){
			htmlList = htmlList + '<li>'+ burrito.ingredientsList[item] +'</li>';
		}


	}
	
	$('.ingredientsList').html(htmlList);
	$('.calorieMeter').text(burrito.burritoCalories);
	

};

updateView();

$('.ingredient').change(function() {
	$('.invitation').fadeOut();
	var selectedIngredient = $(this).val();
	if (this.checked){
		burrito.addIngredient(selectedIngredient);
		$(this).siblings().css('opacity',.5);
	}
	else{
	    burrito.removeIngredient(selectedIngredient);
	    $(this).siblings().css('opacity',1);
	}
	updateView();
	var half = Math.ceil(burrito.ingredientsList.length/2);
	for (var i = 0; i <= half; i++) {
		$('li:nth-of-type('+i+')').css('text-align', 'right');
	}
}); //end click function


}); //End of document ready

