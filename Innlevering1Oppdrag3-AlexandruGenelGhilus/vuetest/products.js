Vue.component('productselection', {
  template: `
  <div class="product-section">
    <cartComponent></cartComponent>

    <div v-for="item in this.$root.products" class="product">
        <img v-bind:src="item.image" class="image">
        <h2>{{ item.title }}</h2>
        <p>{{ item.platform }}</p>
        <p>In stock: {{ item.stock }} </p>
        <button 
            @click="addToCart(item)"
            :disabled="item.stock < 1"
            :class="{ disabled: item.stock < 1 }">Add to cart</button>
    </div>
  </div>
  `,
  methods: {
    addToCart: (item) => {
      vm.$root.addToCart(item)
      item.stock--
    }
  },
})