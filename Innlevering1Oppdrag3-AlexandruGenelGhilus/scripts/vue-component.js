Vue.component('product', {
    template: `
<div class="product">
    <img :src="image" class="image">
    <h2>{{ title }}</h2>
    <p>{{ platform }}</p>
    <p>In stock: {{ stock }} </p>
    <button v-on:click="stock--">Add to cart</button>
</div>

`,
    data() {
        return {
            id: 1,
            image: "images/PS4/uncharted4.jpg",
            stock: 10,
            platform: "Playstation 4",
            title: "Uncharted 4"
        }
    },

    methods: {}

})

var product = new Vue({
    el: '#product-section',
    data: {}
})
