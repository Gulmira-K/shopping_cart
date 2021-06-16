let itemsContainer = document.querySelector('.shop--items')
let cartContainer = document.querySelector('.shop--cart')

let itemsList = [
  {
    itemName: 'meat',
    image: './media/meat.png',
    price: 10
  },
  {
    itemName: 'milk',
    image: './media/milk.png',
    price: 1.5
  },
  {
    itemName: 'bread',
    image: './media/bread.png',
    price: 3
  },
  {
    itemName: 'broccoli',
    image: './media/brocoli.png',
    price: 2
  },
  {
    itemName: 'cereals',
    image: './media/cereals.png',
    price: 1.5
  },
  {
    itemName: 'cheese',
    image: './media/cheese.png',
    price: 4
  },
  {
    itemName: 'eggs',
    image: './media/eggs.png',
    price: 4
  },
  {
    itemName: 'jam',
    image: './media/jam.png',
    price: 4
  },
  {
    itemName: 'lettuce',
    image: './media/lettuce.png',
    price: 4
  },
  {
    itemName: 'pasta',
    image: './media/pasta.png',
    price: 4
  },
  {
    itemName: 'sausages',
    image: './media/sausages.png',
    price: 4
  },
  {
    itemName: 'tomatos',
    image: './media/tomate.png',
    price: 4
  },
]

let item = itemsList.map(item => {
  return (
    `<li class='shop--item' id=${item.name}>
      <p class='item--name'>${item.itemName}</p>
      <img src=${item.image} />
      <p class='price'>${item.price}€</p>
    </li>`
  )
})

itemsContainer.innerHTML = item.join('')

