Vue.component('product', {
    template: `
<div class="product">
    <img :src="image" class="image">
    <h2>{{ title }}</h2>
    <p>{{ platform }}</p>
    <p>In stock: {{ stock }} </p>
    <button v-on:click="cart++">Add to cart</button>
</div>

`,
    data() {
        return {
            image: "images/PS4/uncharted4.jpg",
            stock: 10,
            platform: "Playstation 4",
            title: "Uncharted 4"
        }
    },
    
})

var app = new Vue({
  el: '#product-section',
  data: {}
})