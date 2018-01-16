
var cart = [];

// function to save cart
var saveCart = function (cart) {
	saved = [];
	return saved.concat(cart);
}
// function to return the total cost
function returnTotalCost () {
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
		// Should total price be item price be price * qty
		total += (cart[i].price * cart[i].quantity)
	}	
	return total;
}
// create and add item
function addItem(name, quantity, price, id) {
	cart.push(new NewItem(name, quantity, price, id))
}
// addOneItem <-- Increases qty of item id +1
function addOneItem (item) {
	return item.quantity++
}
// removeOneItem <-- Decreases qty of item id -1
function removeOneItem (item) {
	if (item.quantity === 0) {
		var removeItem = cart.indexOf(item);
		if(removeItem > -1)
		cart.splice(removeItem, 1);

	} else {
	    return item.quantity--	
	}
	
}
// clearCart <-- removes all items from cart
function clearCart () {
		cart = [];
}
// getCartCount <-- returns total count of all items (sum of qty)
function getCartCount() {
	var total = 0;
	for(var i = 0; i < cart.length; i++) {
		total += cart[i].quantity
	}
	return total
}

// Define a new item
function NewItem(name, quantity, price, id) {
	this.name = name;
	this.quantity = quantity;
	this.price = price;
	this.id = id
}

// mock item data
var rubberDuck = addItem('Rubber Duck', 3, 5.75, 'RD0001');
var tigerToy = addItem('Tiger Stuffed Animal', 2, 10.99, 'TT0002');
