<template>
    <div>
        <Header />
        <p>Unsure if your item can be recycled? <br>
        Click here! </p>
        
        <label for = "brand">Brand (e.g. Pokka)</label> <br>
        <input type = "text" name = "brand" id = "brand" v-model.lazy.trim = "brandVal" />
        <button v-on:click = "brandEntered">Enter</button><br> <br>

        <label for = "name" v-show = "brandEnter">Item Name (e.g. Jasmine Green Tea)</label> <br>
        <select name = "name" id = "name" v-model = "itemVal" v-show = "brandEnter">
            <option v-for = "item in items" v-bind:key = "item.index">{{item['Item Name']}}</option>
        </select><br><br>

        <button v-show = "brandEnter" v-on:click = "checkItem">CHECK</button>

    </div>
</template>

<script>
import Header from './Header.vue'
import database from "../firebase.js"

export default {
    name: "BottleInput",
    data() {
        return {
            brandVal: "",
            brandEnter: false,
            itemVal: "",
            items: [], 
            bottles: []
        };
    },
    methods: {
        fetchItems: function() {
            database.collection("bottles").get().then(querySnapShot => {
                let item = {}
                querySnapShot.forEach(doc => {
                    item = doc.data()
                    item.id = doc.id
                    this.bottles.push(item)
                })
            })
            //console.log(this.bottles)
        }, 
        brandEntered: function() {
            if (this.brandVal === "") {
                alert("Please enter a brand!")
            } else {
                for (var item of this.bottles) {
                    var brand = item['Brand'].toLowerCase()
                    brand  = brand.replace(/[^a-zA-Z ]/g, "")
                    var inputBrand = this.brandVal.toLowerCase()
                    inputBrand = inputBrand.replace(/[^a-zA-Z ]/g, "")
                    if (brand === inputBrand) {
                        this.items.push(item)
                    }
                }
                console.log(this.items)
                if (this.items.length === 0) {
                    alert("Sorry, this brand is currently not supported!")
                } else {
                    this.brandEnter = true;
                }
            }
        }, 
        checkItem: function() {
            if (this.itemVal === "") {
                alert("Please choose an item! If your item is not on the list, the item is currently not supported!")
            } else {
                var recycle;
                for (var item of this.items) {
                    if (item['Item Name'] === this.itemVal) {
                        recycle = item['Recyclable'];
                    }
                }
                if (recycle === true) {
                    this.$router.push("recyclable");
                } else {
                    this.$router.push("unrecyclable");
                }
            }
        }
    },

    components: {
        Header
    }, 
    
    created() {
        this.fetchItems();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}

p {
    font-family: Righteous;
    font-size: 25px;
    text-align: left;
    padding: 30px;
}

label {
    font-family: Righteous;
    font-size: 20px;
}
</style>