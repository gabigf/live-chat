<template>
  <div class="welcome container">
   <p>Welcome</p> 
   <div v-if="showSignup">
     <h2>Login to the chatroom</h2>
    <LoginForm @login="enterChat" />
    <p>Don't have an account yet? <span @click="toggleForm" class="toggle-btn">Sign up</span> here</p>
   </div>
   <div v-else>
    <h2>Sign up to the chatroom</h2>
    <SignupForm @signup="enterChat" />
    <p>Already have an account? <span @click="toggleForm" class="toggle-btn">Log in</span> here</p>
   </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showSignup = ref(true)
    const router = useRouter()

    const toggleForm = () => {
      showSignup.value = !showSignup.value
    }

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }


    return { toggleForm, showSignup, enterChat }
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>