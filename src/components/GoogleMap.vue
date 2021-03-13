<template>
    <div id = "container">
        <Header />
        <div class = "map">
            <h3> Check for recycling points near you! </h3>
            <gmap-map class = "map" :center="center" :zoom="12" style="width:100%;  height: 500px;">
                <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
                    {{infoContent}}
                </gmap-info-window>
                <gmap-marker v-for="(location, key) in locations" :key="key" :position="location.position" :clickable="true" @click="toggleInfo(location, key)" />
            </gmap-map>
        </div>
        <div class = "list">
            <h3> List of Recycling Points </h3>
            <select name="course" id="course" v-model="selectValue">
                <option value="ne">North East</option>
                <option value="n">North</option>
                <option value="c">Central</option>
                <option value="w">West</option>
                <option value="e">East</option>
            </select>
            <p v-if= "selectValue === 'ne'">
                <ul>
                    <li> FairPrice Finest, Waterway Point </li>
                    <li> FairPrice, Hougang Mall </li>
                    <li> FairPrice Finest, The Seletar Mall </li>
                </ul>
            </p>
            <p v-if= "selectValue === 'n'">
                <ul>
                    <li> FairPrice, Northpoint City </li>
                    <li> FairPrice, Marsiling MRT Station </li>
                    <li> FairPrice Xtra, AMK Hub </li>
                    <li> FairPrice Finest, Junction 8</li>
                </ul>
            </p>
            <p v-if= "selectValue === 'c'">
                <ul>
                    <li> FairPrice Finest, 111 Somerset </li>
                    <li> FairPrice, Chinatown Point </li>
                    <li> FairPrice Finest, Funan Mall </li>
                    <li> FairPrice, City Square Mall</li>
                </ul>
            </p>
            <p v-if= "selectValue === 'w'">
                <ul>
                    <li> FairPrice, Jurong Point </li>
                    <li> FairPrice Xtra, JEM </li>
                    <li> FairPrice, Lot 1 Shoppers' Mall </li>
                    <li> FairPrice Finest, Bukit Panjang Plaza</li>
                </ul>
            </p>
            <p v-if= "selectValue === 'e'">
                <ul>
                    <li> FairPrice, Whitesands </li>
                    <li> FairPrice, Tampines Mall </li>
                    <li> FairPrice Finest, Bedok Mall </li>
                </ul>
            </p> 
        </div>
    </div>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-vue-google-maps
import database from "../firebase.js"
import Header from './Header.vue'

export default {
    name: "GoogleMap",
    data() {
        return {
            center: { lat: 1.3521, lng: 103.8198},
            currentPlace: null, 
            locations: [], 
            infoPosition: null,
            infoName: null,
            infoAddress: null,
            infoOpened: false,
            infoCurrentKey: null,
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            }, 
            selectValue: ""
        }
    },

    components: {
        Header
    },

    mounted() {
        this.geolocate();
    },

    created() {
        this.fetchLocations();
    },

    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        }, 
        getPosition: function(marker) {
            console.log(marker.position.lat);
            return {
                lat: marker.position.lat,
                lng: marker.position.lng
            }
        },
        toggleInfo: function(marker, key) {
            this.infoPosition = this.getPosition(marker)
            this.infoContent = marker.name + ", Address: " + marker.address
            if (this.infoCurrentKey == key) {
                this.infoOpened = !this.infoOpened
            } else {
                this.infoOpened = true
                this.infoCurrentKey = key
            }
        }, 
        fetchLocations: function() {
            database.collection("locations").get().then(querySnapShot => {
                let loc = {}
                querySnapShot.forEach(doc => {
                    loc = doc.data()
                    loc.id = doc.id
                    loc.name = doc.data().name
                    var geoPoint = doc.data().position
                    loc.position.lat = geoPoint.latitude
                    loc.position.lng = geoPoint.longitude
                    loc.address = doc.data().address
                    this.locations.push(loc)
                })
            })
            console.log(this.locations)
        }, 
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h3 {
    font-family: Righteous;
}
/*
#container{
  height:100%;
  width:100%;
  font-size:0;
  margin:0 auto;
}
.map{
  display:inline-block;
  vertical-align:top;
  height:100%;
  width:50%;
}
*/
.map {
    width: 50%;
    float: left;
}
.list {
    width: 50%;
    float: right;
}
</style>
