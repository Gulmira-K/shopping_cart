let itemsContainer = document.querySelector('.shop--items')
let cartContainer = document.querySelector('.shop--cart')

let itemsList = [
  {
    name: 'meat',
    image: './media/meat.png',
    price: 10
  },
  {
    name: 'milk',
    image: './media/milk.png',
    price: 1.5
  },
  {
    name: 'bread',
    image: './media/bread.png',
    price: 3
  },
  {
    name: 'broccoli',
    image: './media/brocoli.png',
    price: 2
  },
  {
    name: 'cereals',
    image: './media/cereals.png',
    price: 1.5
  },
  {
    name: 'cheese',
    image: './media/cheese.png',
    price: 4
  },
  {
    name: 'eggs',
    image: './media/eggs.png',
    price: 4
  },
  {
    name: 'jam',
    image: './media/jam.png',
    price: 4
  },
  {
    name: 'lettuce',
    image: './media/lettuce.png',
    price: 4
  },
  {
    name: 'pasta',
    image: './media/pasta.png',
    price: 4
  },
  {
    name: 'sausages',
    image: './media/sausages.png',
    price: 4
  },
  {
    name: 'tomatos',
    image: './media/tomate.png',
    price: 4
  },
]

let item = itemsList.map(item => {
  return (
    `<li class='shop--item' id=${item.name}>
      <img src=${item.image} />
      <p class='price'>${item.price}€</p>
    </li>`
  )
})

itemsContainer.innerHTML = item.join('')

