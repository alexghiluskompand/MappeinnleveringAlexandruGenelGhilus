Vue.component('productsection', {
    template: `

<div class="product-section" :key="product1.id">

    <div id="cart">
        <p>{{ units }} </p>
        <img v-bind:src = "cartImage">
    </div>

    <div class="product">
        <img v-bind:src="product1.image" class="image">
        <h2>{{ product1.title }}</h2>
        <p>{{ product1.platform }}</p>
        <p>In stock: {{ product1.stock }} </p>
        <button 
            v-on:click="product1.stock--"
            :disabled="product1.stock < 1"
            :class="{ disabled: product1.stock < 1 }">Add to cart</button>
    </div>

    <div class="product" :key="product2.id">
        <img v-bind:src="product2.image" class="image">
        <h2>{{ product2.title }}</h2>
        <p>{{ product2.platform }}</p>
        <p>In stock: {{ product2.stock }} </p>
        <button 
            v-on:click="product2.stock--"
            :disabled="product2.stock < 1"
            :class="{ disabled: product2.stock < 1 }">Add to cart</button>
    </div>

    <div class="product" :key="product3.id">
        <img v-bind:src="product3.image" class="image">
        <h2>{{ product3.title }}</h2>
        <p>{{ product3.platform }}</p>
        <p>In stock: {{ product3.stock }} </p>
        <button 
            v-on:click="product3.stock--"
            :disabled="product3.stock < 1"
            :class="{ disabled: product3.stock < 1 }">Add to cart</button>
    </div>

    <div class="product" :key="product4.id">
        <img v-bind:src="product4.image" class="image">
        <h2>{{ product4.title }}</h2>
        <p>{{ product4.platform }}</p>
        <p>In stock: {{ product4.stock }} </p>
        <button 
            v-on:click="product4.stock--"
            :disabled="product4.stock < 1"
            :class="{ disabled: product4.stock < 1 }">Add to cart</button>
    </div>

    <div class="product" :key="product5.id">
        <img v-bind:src="product5.image" class="image">
        <h2>{{ product5.title }}</h2>
        <p>{{ product5.platform }}</p>
        <p>In stock: {{ product5.stock }} </p>
        <button 
            v-on:click="product5.stock--"
            :disabled="product5.stock < 1"
            :class="{ disabled: product5.stock < 1 }"
            v-on:click="incrementCart">Add to cart</button>
    </div>
    
    <div><p> {{ cart }}</p><div>

</div>
`,
    data() {
        return {
            units: 0,
            cartImage: "images/shopping-cart.png",
            product1: {
                id: 1,
                image: "images/PS4/uncharted4.jpg",
                stock: 21,
                platform: "Playstation 4",
                title: "Uncharted 4"
            },
            product2: {
                id: 2,
                image: "images/PS4/assasinscreed3.jpeg",
                stock: 9,
                platform: "Playstation 4",
                title: "Assasin's Creed 3"
            },
            product3: {
                id: 3,
                image: "images/PS4/callofdutysmashbros.jpg",
                stock: 12,
                platform: "Playstation 4",
                title: "Call of Duty Smash Bros"
            },
            product4: {
                id: 4,
                image: "images/PS4/doom.jpg",
                stock: 32,
                platform: "Playstation 4",
                title: "Doom"
            },
            product5: {
                id: 5,
                image: "images/PS4/shadowofmordor.jpg",
                stock: 3,
                platform: "Playstation 4",
                title: "Shadow of Mordor"
            },
        }
    },

    methods: {
        incrementCart: function() {
        this.cart++
    }
    }
})
