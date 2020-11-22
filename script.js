window.load=doShowAll();

const imageBox = document.querySelector(".image-box");
let addBtn = document.querySelectorAll('.btn-primary');

imageBox.addEventListener("onmouseover", function (){
	addBtn.style.display = "block";
});

localStorage.myProperty="myValue";

localStorage.setItem('propertyName','value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');

const SaveItem = () => {

    var name = document.section.products.image.value;
    var name = document.section.products.pname.value;
    var name = document.section.products.price.value;
    localStorage.setItem(name, pname, price);
    doShowAll();

}

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Image</th><th>Name</th></tr><tr><th>Price</th>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Image</th><th>Name</th></tr><tr><th>Price</th>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}

// let addBtn = document.querySelectorAll('.btn-primary');
// let totalAmount = document.querySelector('#total');

// var total = 0;

// for (let wears of addBtn) {
// 	wears.addEventListener('click', () => {
		
// 		let prc = parseInt(wears.value);
// 		total += prc;

// 		console.log(`total bill ${total}`);

// 		// total amount added to total after cart if any item is added
// 		totalAmount.textContent = total;

// 		// seperate function made for
// 		itemAdd(wears, prc);
// 	});
// }