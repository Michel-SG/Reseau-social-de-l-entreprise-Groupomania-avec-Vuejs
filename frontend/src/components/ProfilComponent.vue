<template>
    <div id="profil">
        <h2>Mon profil</h2>
        <ul class="list-group" v-for="membre in memberDatas" :key="membre.id">
            <li class="list-group-item">Pseudo: {{membre.pseudo}}</li>
            <li class="list-group-item">Email: {{membre.email}}</li>
            <li class="list-group-item">Mot de passe: doit être secret...</li>
            <li class="list-group-item">Fonction: {{membre.metier}}</li>
            <li class="list-group-item">
                <button type="button" class="btn btn-danger" v-on:click="supprimerProfil ()">Supprimer mon compte !</button> 
            </li> 
        </ul>    
    </div>
</template>
<script>
const axios = require('axios').default;
export default {
  name: 'ProfilComponent',
    data () {
        return{
            userId: null,
            userPosts: null,
            memberDatas: null,
            Admin: null,
        }        
    },
    methods:{
        affichageProfil (){ //display profile
            axios.get('http://localhost:3000/api/user/profil/'+localStorage.authUser,{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })  
            .then(response => this.memberDatas = response.data) //collect the informations about user
            .catch(error => console.log(error));
        },
        supprimerProfil (){ //delete profile
            axios.delete('http://localhost:3000/api/user/profil/'+localStorage.authUser,{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })
            .then((response)=> {
                if(response.status == 200){ // if the verification is ok
                    localStorage.clear(); // clean localstorage
                    window.location.replace("http://localhost:8080/"); //redirect to the login page
                }  
            })
            .catch(error => console.log(error));
        }
    },
    beforeMount(){ 
        this.affichageProfil()
        if(localStorage.authUser && localStorage.levelUser == 4){// Always need to verify if it's the administrator before mounted
        this.Admin = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#profil{
    width: 80%;
    margin: auto;
}
</style>
