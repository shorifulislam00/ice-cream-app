var app = new Vue({
    el: "#app",
    data: {
        varient: [
            {id: 1, name: "Vanilla", price: 100},
            {id: 2, name: "Chocolate", price: 120},
            {id: 3, name: "Strawberry", price: 90},
            {id: 4, name: "Orange", price: 80},
            {id: 5, name: "Lemon", price: 50}
        ],
        cart: [
            {id: 1, name: "Vanilla", price: 100},
        ]
    },
    methods: {
        isInCart(id){
            return this.cart.find(item => item.id === id);
        },
        addToCart(id){
            this.cart.push(this.varient.find(item => item.id == id));
        },
        removeCartItem(id){
            this.cart.splice(this.cart.findIndex(item => item.id === id), 1)
        }
    },
    computed: {
        total() {
            return this.cart.reduce((t, item) => t + item.price, 0);
        }
    }
})