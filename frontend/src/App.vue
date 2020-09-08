<template>
  <div id="app">
    <div id="logo">
      <img src="./assets/logo.png" alt="logo Groupomania">
    </div>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="!Logged">
            <button class="btn btn-primary">Accueil</button>
          </li>
          <li class="nav-item" >
            <button class="btn btn-primary">Inscription</button>
          </li>
          <li class="nav-item" >
            <p>Bonjour  !</p>
          </li>
          <li class="nav-item" >
            <button class="btn btn-primary">The WALL</button>
          </li>
          <li class="nav-item" >
            <button class="btn btn-primary">Mon profil</button>
          </li>
          <li class="nav-item" >
            <button class="btn btn-primary">Admin</button>
          </li>
          <li class="nav-item" >
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
  /*components: {
    HelloWorld
  }*/
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
  margin-top: 5%;
  margin-bottom: 5%;
}
#nav {
  padding: 30px;
}
#totalView{
  width: 98%;
  margin: auto;
}
</style>
