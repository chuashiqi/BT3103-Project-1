<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <div class = "container">
                    <img :src="currentImg" />
                    <p class = "center"> {{currentTextInImg}} </p>
                    
                </div>
                <p> {{currentText}} </p>
            </div>
        </transition-group>
        <!--a class="prev" @click="prev" href="#">&#10094; Previous</a-->
        <!--a class="next" @click="next" href="#">&#10095; Next</a-->
    </div>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-create-image-slider 

export default {
    name: "Slider",
    data() {
        return {
            images: [
                {
                    img: "https://i.imgur.com/mCIs5yY.png", 
                    textInImage: "Many of us beached and found dead with plastic waste in out stomachs",
                },
                {
                    img: "https://i.imgur.com/xJCTjP1.png", 
                    textInImage: "Plastic Waste releases methane and ethylene which exacerbates climate change"
                }
            ],
            texts: [
            ],
            name: "Clement",
            numRecycled: 3,
            numRequiredOrca: 4,
            numRequiredPlastic: 5,
            timer: null,
            currentIndex: 0
        };
    },

    created: function() {
        console.log("created()");
        this.texts.push("Hello " + this.name + "!" + "\n" + "You have recycled " + this.numRecycled + " bottles today." + "\n" + this.numToGoOrca() + " more to save an Orca");
        this.texts.push("Hello " + this.name + "!" + "\n" + "You have recycled " + this.numRecycled + " bottles today." + "\n" + this.numToGoPlastic() + " more to reduce climate change effect by 13%");
    },

    mounted: function() {
        console.log(this.texts);
        this.startSlide();
    },

    methods: {
        startSlide: function() {
        this.timer = setInterval(this.next, 10000);
        },

        next: function() {
        this.currentIndex += 1;
        },
        prev: function() {
        this.currentIndex -= 1;
        }, 
        numToGoOrca: function() {
            return this.numRequiredOrca - this.numRecycled;
        },
        numToGoPlastic: function() {
            return this.numRequiredPlastic - this.numRecycled;
        }
    },

    computed: {
        currentImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]["img"];
        }, 
        currentText: function() {
            return this.texts[Math.abs(this.currentIndex) % this.texts.length]
        }, 
        currentTextInImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]["textInImage"];
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

p {
    font-family: Righteous;
    font-size: 50px;
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
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
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

</style>