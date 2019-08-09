Vue.component('cart', {
    template: `
<div id="cart">
    <p>{{ units }} </p>
    <img v-bind:src = "image">
</div>
`,
    data() {
        return {
            image: "images/shopping-cart.png",
            units: 0
        }
    }

})