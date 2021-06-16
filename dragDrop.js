const shop = document.querySelector('.shop--items');
const cart = document.querySelector('.shop--cart');
let totalPrice = document.querySelector('#total--price');
const payBtn = document.getElementById('total--button');
let items = document.querySelectorAll('.shop--item');

let priceArray = new Array();

totalPrice.innerHTML = 0;

cart.addEventListener('dragover', dragOver);
payBtn.addEventListener('click', handlePay);

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);

  function dragStart() {
    item.classList.add('dragging');
  }

  function dragEnd() {
    item.classList.remove('dragging');
    item.childNodes[1].style.display = 'block';
    item.childNodes[3].style.display = 'none';

    let removeBtn = document.createElement('button');
      
    removeBtn.innerHTML = 'X';

    item.insertAdjacentElement('beforeend', removeBtn);
    
    removeBtn.addEventListener('click', removeItem.bind(null, item));

    let sum = 0;
    let itemPrice = item.childNodes[5].innerHTML;

    priceArray.push(parseFloat(itemPrice));
   
    for (let i = 0; i < priceArray.length; i++) { sum += priceArray[i] };
  
    totalPrice.innerText = sum;
  }
});

function dragOver() {
  const draggable = document.querySelector('.dragging');
  cart.append(draggable);
}

function removeItem(item) {
  shop.appendChild(item);
    
  item.childNodes[1].style.display = 'none';
  item.childNodes[3].style = 'display: block; margin: 0 auto';
  item.childNodes[7].style.display = 'none';

  let itemPrice = parseFloat(item.childNodes[5].innerHTML);
  let sum = parseFloat(totalPrice.innerHTML);
  
  totalPrice.innerHTML = sum -= itemPrice;

  if (sum === 0) {
    priceArray.length = 0;
  }
}

function handlePay() {
  if (totalPrice.innerHTML != 0) {
    alert('Thank you for your purchase!')
  } else {
    alert('Your cart is empty...')
  }
}

