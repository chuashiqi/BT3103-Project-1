<template>
  <div id="quiz">
    <Header />
    <h1 id="title">QUIZ</h1>
    <div v-if = "this.user[0]['quizCompleted'] === false">
        <p id="question">Which bottle codes are recyclable?</p>
        <p id="point">5 points</p>
        <p id="options">A. 1,3,5 <br> B. 1,2,7 <br> C. 1,2,5 <br> D. 2,5,7</p>
        <br>
        <label id="ans">Your Answer is</label> <br><br>
        <div class = "select">
            <select name="option" id="option" v-model="selectValue">
                    <option value="A">A. 1,3,5</option>
                    <option value="B">B. 1,2,7</option>
                    <option value="C">C. 1,2,5</option>
                    <option value="D">D. 2,5,7</option>
            </select>
        </div> <br>
        <button id="submit" v-on:click=redirect()>Submit</button>
    </div>
    <div v-else>
        You have completed your quiz this week. Come back next week for additional points!
    </div>

  </div>
</template>

<script>
import Header from './Header.vue'
import database from "../firebase.js"

export default {
    data() {
        return {
            selectValue: "", 
            username: "clement", // will be passed down as props
            user: [],
            quizStatus: null, 
            points: {
                amount: 5, 
                date: new Date(), 
                description: "Quiz"
            }
        }
    }, 

    methods: {
        redirect: function() {
            console.log(this.quizStatus)
            this.updateQuizStatus(); 
            if (this.selectValue == 'A') {
                this.$router.push("success")
                this.increasePoints(); 
            } else {
                this.$router.push("failure")
            }
        }, 
        fetchUserInfo: function() {
            database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    if (user.username === this.username) {
                        this.user.push(user)
                    }
                })
            })
        }, 
        updateQuizStatus: function() {
            database.collection("users").doc(this.user[0].id).update({
                "quizCompleted": true,
            })
            
        },
        increasePoints: function() {
            // update availablePoints field
            var newPoints = this.user[0].availablePoints + 5
            console.log(newPoints)
            database.collection("users").doc(this.user[0].id).update({
                "availablePoints": newPoints,
            })
            // update points collection
            database.collection("users").doc(this.user[0].id).collection("points").add(this.points)
        }
    }, 

    components: {
        Header
    }, 

    created() {
        this.fetchUserInfo();
    },
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#quiz {
  font-family: Righteous;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#title {
  text-align: center;
  margin-top: 40px;
  font-size: 55px;
}

#question {
  text-align: center;
  margin-top: 20px;
  font-size: 45px;
}

#point {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}

#options {
  text-align: left;
  margin-top: 25px;
  margin-left: 200px;
  font-size: 40px;
}
#ans {
  text-align: left;
  margin-top: 25px;
  margin-left: 0px;
  font-size: 40px;
}

#myans {
  text-align: left;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 30px;
}

button {
    font-family: Righteous;
    border: 2px solid #5CAFAA ;
    background-color: #5CAFAA;
    color: black;
    padding: 10px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
}

.select { 
    position: relative; 
    display: block; 
    width: 20em; 
    height: 3em; 
    line-height: 3; 
    background: black; 
    overflow: hidden; 
    border-radius: .25em; 
    margin-left: auto;
    margin-right: auto;
} 

select { 
    width: 100%; 
    height: 100%; 
    color: black; 
    cursor: pointer; 
    font-family: Righteous;
    font-size: 25px;
} 
select::-ms-expand { 
    display: none; 
}  
.select::after { 
    content: '\25BC'; 
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    padding: 0 1em; 
    background: #5CAFAA; 
    pointer-events: none; 
} 
.select:hover::after { 
    color: black; 
} 
</style>