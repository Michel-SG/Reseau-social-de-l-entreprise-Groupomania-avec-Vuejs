<template>
  <div class="connexion">
    {{ message }}
      <h2>Connexion</h2>
      <b-form @submit.prevent="formConnexion">
        <b-form-group id="input-group-1" label-for="input-1" description="">
          <b-form-input id="input-1" type="email" v-model="email" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" placeholder="Saisissez votre adresse mail..."></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" type="password" v-model="password" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" placeholder="Saisissez votre mot de passe..."></b-form-input>
        </b-form-group>
        <button class="btn btn-primary" type="submit">Envoyer</button>
      </b-form>
    
  </div>
</template>
<script>

const axios = require('axios').default;
export default {
    name: 'ConnectionComponent',
    data() {
        return{
        email: '',
        password: '' , 
        message: null,
        }
    },
    methods:{
    formConnexion (){ //Connected users
      
      if (this.email === null || this.password === null) {
          return false;
      }
      axios.post('http://localhost:3000/api/user/login', {
              email: this.email,
              password: this.password,
      })
      .then((response)=> {
          if(response){ 
            
              if(response.status === 200 && response.data.token){ // if response is ok!
                //var authUser = response.data.userId
                //console.log(authUser)
                //localStorage.setItem('authUser',response.data.userId) //recording userId in the localstorage
                localStorage.setItem('levelUser',response.data.userLevel) //recording user level in the localstorage
                localStorage.setItem('authUserToken',response.data.token) //recording user Token in the localstorage
                localStorage.setItem('userPseudo',response.data.userPseudo) //recording user pseudo in the localstorage
                window.location.replace("http://localhost:8080/");
                }else{
                this.message = "Adresse mail ou mot de passe incorrect !";
              }
          }
      })
      .catch((error)=> {
          console.log(error);
      });
    },
  }
}
</script>