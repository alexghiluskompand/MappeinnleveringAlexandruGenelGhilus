Vue.component('cartComponent', {
  template: `
    <div id="cart" @click="viewCart">

      <div v-if="this.$root.isCartOpen">
        <h1>
          Cart is open when this is shown
        </h1>

        <div>{{ products }}</div>
      </div>

      <p>{{ this.$root.count }}</p>
      <img v-bind:src = "image">
    </div>
  `
  ,
  data() {
    return {
      image: "images/shopping-cart.png",
      products: [
        
      ]
    }
  },
  methods: {
    viewCart: () => {
      vm.$root.openCart()
      console.log(vm.$root.isCartOpen)
    }
  }
})