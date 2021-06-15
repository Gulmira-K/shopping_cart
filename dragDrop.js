let items = document.querySelectorAll('.shop--item');
const cart = document.querySelector('.shop--cart')

items.forEach(item => {
  // item.addEventListener('mousedown', handleMouseDown);
  // item.addEventListener('mouseup', handleMouseUp);


  // function handleMouseDown(e) {
  //   console.log(item)
  //   item.style.position = 'absolute';
  //   cart.append(item);

  //   moveAt(e.pageX, e.pageY);

  //   cart.addEventListener('mousemove', handleMouseMove);
  // }



  // function handleMouseUp() {
  //   cart.removeEventListener('mousemove', handleMouseMove);
  //   item.onmouseup = null;
  //   console.log( item.onmouseup )
  // }

  //  function handleMouseMove(e) {
  //   moveAt(e.pageX, e.pageY);
  // }

  // function moveAt(pageX, pageY) {
  //   item.style.left = pageX - item.offsetWidth / 2 + 'px';
  //   item.style.top = pageY - item.offsetHeight / 2 + 'px';
  // }

  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);

  function dragStart() {
    item.classList.add('dragging')
  }

  function dragEnd() {
    item.classList.remove('dragging')

    item.removeChild(item.childNodes[1])

    let itemId = item.getAttribute('id');
    let itemName = document.createElement('p');
    itemName.innerHTML = itemId;
    item.insertAdjacentElement('afterbegin', itemName)
  }
});

cart.addEventListener('dragover', dragOver);

function dragOver() {
  const draggable = document.querySelector('.dragging');
  const total = document.querySelector('#total')
  let price = parseInt(draggable.childNodes[3].innerHTML);
  let priceArray = [];

  priceArray.push(price)
  console.log(priceArray)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(priceArray.reduce(reducer));

  // const prices = document.querySelectorAll('.dragging > .price')
  // prices.forEach(price => {
  //   let itemPrice = parseInt(price.innerHTML)
  //   let priceArray = new Array();
  //   priceArray.push(...itemPrice)
  //   console.log(priceArray)
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;

  //  console.log(priceArray.reduce(reducer));
    
  // })
  
  cart.append(draggable)
  // total.innerHTML = '';
  // total.innerHTML = `Total: ${totalPrice}€`
}