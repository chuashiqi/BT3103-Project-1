import Landing from "./components/Landing.vue"
import Slider from "./components/Slider.vue"
import GoogleMap from "./components/GoogleMap.vue"
import RewardsPage from "./components/RewardsPage.vue"
import RewardsHistory from "./components/RewardsHistory.vue"
import RedeemRewards from "./components/RedeemRewards.vue"
import RedeemSuccess from "./components/RedeemSuccess.vue"
import BottleInput from "./components/BottleInput.vue"
import Recyclable from "./components/Recyclable.vue"
import Unrecyclable from "./components/Unrecyclable.vue"
import FAQ from "./components/FAQ.vue"
import QuizPage from "./components/QuizPage.vue"
import Success from "./components/Success.vue"
import Failure from "./components/Failure.vue"
import Signup from "./components/signup/Signup.vue"
import Signin from "./components/signin/Signin.vue"

export default [
    {path: "/", component: Landing},
    {path: "/signup", component: Signup},
    {path: "/signin", component: Signin},
    {path: "/home", component: Slider},
    {path: "/locator", component: GoogleMap},
    {path: "/rewardsPage", component: RewardsPage},
    {path: "/rewardsHistory", component: RewardsHistory}, 
    {path: "/redeemRewards", component: RedeemRewards}, 
    {path: "/redeemSuccess", name: "redeemSuccess", component: RedeemSuccess, props: true}, 
    {path: "/bottleInput", component: BottleInput},
    {path: "/recyclable", component: Recyclable},
    {path: "/unrecyclable", component: Unrecyclable},
    {path: "/FAQ", component: FAQ},
    {path: "/success", component: Success},
    {path: "/failure", component: Failure},
    {path: "/quizPage", component: QuizPage},
]