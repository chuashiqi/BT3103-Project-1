<template>
    <div v-if = "state">
        <Header />
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <div class = "container">
                    <img :src="currentImg" />
                </div>
                <p> 
                    Hello {{name}}!
                    You have recycled {{recycledToday.length}} bottle(s) today.
                    <span v-if = "currentImgName === 'orca'">{{numToGoOrca()}} more to save an Orca!</span>
                    <span v-if = "currentImgName === 'plastic'">{{numToGoPlastic()}} more to reduce climate change effect by 13%!</span>
                </p>
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "Slider",
    data() {
        return {
            images: [
                {
                    img: "https://i.imgur.com/vrKf9gm.png", 
                    textInImage: "Many of us beached and found dead with plastic waste in out stomachs",
                    name: "orca"
                },
                {
                    img: "https://i.imgur.com/UbXQLcl.png", 
                    textInImage: "Plastic Waste releases methane and ethylene which exacerbates climate change", 
                    name: "plastic"
                }
            ],
            texts: [],
            timer: null,
            currentIndex: 0,
            numRequiredOrca: 5,
            numRequiredPlastic: 5,
            name: "", 
            user: [], 
            recycledToday: [], 
            state: false,
        };
    },

    created() {
        this.fetchUserInfo();
    },

    mounted() {
        this.startSlide();
    },

    methods: {
        startSlide: function() {
            this.timer = setInterval(this.next, 8000);
        },
        next: function() {
            this.currentIndex += 1;
        },
        prev: function() {
            this.currentIndex -= 1;
        }, 
        numToGoOrca: function() {
            return this.numRequiredOrca - this.recycledToday.length;
        },
        numToGoPlastic: function() {
            return this.numRequiredPlastic - this.recycledToday.length;
        }, 
  
        fetchUserInfo: function() {
            var user = firebase.auth.currentUser
            if (user) {
                this.state = true;
                var email = firebase.auth.currentUser.email
                firebase.database.collection("users").get().then(snapshot => {
                    let user = {}
                    snapshot.forEach(doc => {
                        user = doc.data()
                        user.id = doc.id
                        if (user.email === email) {
                            this.name = user.username;
                            this.user.push(user)
                        }
                    })
                });
                var query = firebase.database.collection("users").where("email", "==", email)
                query.get().then((querySnapshot) => {
                    querySnapshot.forEach((document) => {
                        document.ref.collection("points").get().then((querySnapshot) => {
                            var dateToday = new Date();
                            dateToday.setHours(0, 0, 0, 0)
                            let item = {}
                            querySnapshot.forEach(doc => {
                                item = doc.data()
                                item.id = doc.id
                                var itemDate = item.date.toDate()
                                itemDate.setHours(0, 0, 0, 0)
                                if (itemDate.valueOf() === dateToday.valueOf() && item.description !== "Quiz") {
                                    this.recycledToday.push(item)
                                }
                            })
                        });
                    });
                });
            } else {
                alert("Please sign in or sign up.")
                this.state = false;
                location.href = "./";
            }
        }
        
    },

    computed: {
        currentImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]["img"];
        }, 
        currentText: function() {
            return this.texts[Math.abs(this.currentIndex) % this.texts.length]
        }, 
        currentImgName: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]["name"];
        },
        currentTextInImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]["textInImage"];
        }
    }, 

    components: {
        Header
    }, 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

p {
    font-family: Righteous;
    font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%;
}

.prev, .next {
  font-family: Righteous;
  cursor: pointer;
  position: absolute;
  top: 90%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
}

p {
    text-align: center;
}
</style>
