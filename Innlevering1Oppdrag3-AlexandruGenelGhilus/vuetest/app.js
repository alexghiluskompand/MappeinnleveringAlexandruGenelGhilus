var vm = new Vue({
  el: '#container',
  data() {
    return {
      products: [
        {
            id: 1,
            image: "images/PS4/uncharted4.jpg",
            stock: 21,
            platform: "Playstation 4",
            title: "Uncharted 4"
        },
        {
            id: 2,
            image: "images/PS4/assasinscreed3.jpeg",
            stock: 9,
            platform: "Playstation 4",
            title: "Assasin's Creed 3"
        },
        {
            id: 3,
            image: "images/PS4/callofdutysmashbros.jpg",
            stock: 12,
            platform: "Playstation 4",
            title: "Call of Duty Smash Bros"
        },
        {
            id: 4,
            image: "images/PS4/doom.jpg",
            stock: 32,
            platform: "Playstation 4",
            title: "Doom"
        },
        {
            id: 5,
            image: "images/PS4/shadowofmordor.jpg",
            stock: 3,
            platform: "Playstation 4",
            title: "Shadow of Mordor"
        }
      ],
      cart: [],
      count: 0,
      isCartOpen: false
    }
  },
  methods: {
    openCart() { 
      vm.isCartOpen = !vm.isCartOpen
    },

    addToCart: (item) => {
      vm.cart.push(item.id)
      vm.count++

      console.log(vm.cart)
    },

    removeItem: (id) => {
      for(let i = vm.cart.length -1; i >= 0; i--) {
        if (vm.cart[i] === id) {
          vm.cart.splice(i, 1)
        }
      }
    }
  }
});
