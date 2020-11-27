// window.load=doShowAll();

const imageBox = document.querySelector(".image-box");
const buttons = document.querySelectorAll(".btn");
let itemCount = document.querySelector('.item-count');
let totalAmount = document.querySelector('#total');
const cartList = document.querySelector("#cart-list");

const images = [
	{
		id: 1,
		image: "https://i.ibb.co/ZYW3VTp/brown-brim.png"
	},
	{
		id: 2,
		image: "https://i.ibb.co/ypkgK0X/blue-beanie.png"
	},
	{
		id: 3,
		image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png"
	},
	{
		id: 4,
		image: "https://i.ibb.co/RjBLWxB/grey-brim.png"
	},
	{
		id: 5,
		image: "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
	},
	{
		id: 6,
		image: "https://i.ibb.co/dJbG1cT/yeezy.png"
	},
	{
		id: 7,
		image: "https://i.ibb.co/bPmVXyP/black-converse.png"
	},
	{
		id: 8,
		image: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png"
	},
]

let total = 0; 

buttons.forEach(function(button){
	button.addEventListener("click", function () {

      	var counter = 0;
      	var setIntervalId = setInterval(function () {
          counter += 1;
      	}, 1000)

 		itemCount.textContent = setIntervalId;

 		let prc = parseInt(button.value);
		total += prc;

		totalAmount.textContent = total;

		itemAdd(button, prc);
	});
});




function itemAdd(button, prc){

	let obj1 = {
		prd: document.createElement("div"),
		dsc: document.createElement("div"),
		qty: document.createElement("div"),
		price: document.createElement("div"),
		rmv : document.createElement("div")
	};

	let { prd, dsc, qty, price, rmv } = obj1;
	localStorage.setItem(obj1, 'id');

	prd.setAttribute('class', '.col-md-3');
	dsc.setAttribute('class', '.col-md-3');
	qty.setAttribute('class', '.col-md-2');
	price.setAttribute('class', '.col-md-2');
	rmv.setAttribute('class', '.col-md-2');

	let leftA = document.createTextNode("<");
	let txt = document.createTextNode("0");
	let rightA = document.createTextNode(">");

	qty.appendChild(rightA);
	qty.appendChild(leftA);
	qty.appendChild(txt);	

	images.map((productImage, index) => {
		prd.innerHTML = `<img src = "${productImage.image}" />`;
	});

	dsc.textContent = button.name;
	qty.textContent = leftA + txt + rightA;
	price.textContent = prc;
	rmv.textContent = "X";

	cartList.appendChild(prd);
	cartList.appendChild(dsc);
	cartList.appendChild(qty);
	cartList.appendChild(price);
	cartList.appendChild(rmv);

console.log("is working")
	
  	rmv.onclick = function() {
    	total = total - prc;
    	console.log(total);
    	cartList.removeChild(prd);
    	cartList.removeChild(dsc);
		cartList.removeChild(qty);
		cartList.removeChild(price);
		cartList.removeChild(rmv);
		totalAmount.textContent = total;
  	}
	
}

