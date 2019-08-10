Vue.component('cart', {
  template: `
    <div id="cart">
      <p>{{ this.$root.count }}</p>
      <img v-bind:src = "image">
    </div>
  `
  ,
  data() {
    return {
      image: "images/shopping-cart.png",
    }
  }
})