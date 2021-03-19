import Landing from "./components/Landing.vue"
import Slider from "./components/Slider.vue"
import GoogleMap from "./components/GoogleMap.vue"

export default [
    {path: "/", component: Landing},
    {path: "/home", component: Slider},
    {path: "/locator", component: GoogleMap},
]