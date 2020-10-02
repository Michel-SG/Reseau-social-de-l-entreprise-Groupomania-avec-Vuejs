<template>
  <div id="app">
    <div id="logo">
      <img src="./assets/logo.png" alt="logo Groupomania">
    </div>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupport">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="!Logged">
             <router-link to="/"><button class="btn btn-primary">Accueil</button></router-link>
          </li>
          <li class="nav-item" v-if="!Logged">
            <router-link to="/inscription"><button class="btn btn-primary">Inscription</button></router-link>
          </li>
          <li class="item" v-if="Logged">
            <p>Bonjour {{ userPseudo }}</p>
          </li>
          <li class="nav-item" v-if="Logged">
            <router-link to="/wall"><button class="btn btn-primary">Forum</button></router-link>
          </li>
          <li class="nav-item" v-if="Logged">
            <router-link to="/profil"><button class="btn btn-primary">Mon profil</button></router-link>
          </li>
          <li class="nav-item" v-if="Admin">
            <router-link to="/admin"><button class="btn btn-primary">Admin</button></router-link>
          </li>
          <li class="nav-item" v-if="Logged">
            <button class="btn btn-primary" v-on:click="logOut ()">Déconnexion</button>
          </li>
        </ul>
      </div> 
    </nav>
   
   <div id="totalView">
      <router-view/>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return{
      Logged: false,
      Admin: false,
      userPseudo: null
    }        
  },
  /*components: {
    HelloWorld
  }*/
  methods:{
    logOut (){
      localStorage.clear(); // clear localstorage
      window.location.replace("http://localhost:8080/"); //go to the home page
    }
  },
  beforeMount (){ 
    //const vm = this;
    if(localStorage.authUserToken){
      this.Logged = true
      this.$router.push('wall') //direction to the wall
    }
    if(localStorage.authUserToken && localStorage.levelUser == 4){// Always need to verify if it's the administrator before mounted
      this.Admin = true
    }
    if(localStorage.userPseudo){
      this.userPseudo = localStorage.userPseudo
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo img{
  width: 30%;
  margin-top: 4%;
  margin-bottom: 4%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#totalView{
  width: 98%;
  margin: auto;
}
@media only screen and (min-width: 600px) {
  #app{
  width: 95%;
  margin: auto;
  margin-bottom: 4%;
  } 
} 
@media only screen and (min-width: 768px) {
  #app{
  width: 85%;
  margin: auto;
  margin-bottom: 4%;
  }
} 
@media only screen and (min-width: 992px) {
  #app{
  width: 70%;
  margin: auto;
  margin-bottom: 4%;
  }
} 
@media only screen and (min-width: 1200px) {
  #app{
  width: 60%;
  margin: auto;
  margin-bottom: 4%;
  }
}
</style>
