<template>
    <div class="wall">
        <h1>Forum de Groupomania</h1>
        <div class="wallButton"> 
            <button type="button" class="btn btn-info" v-on:click="newPost ()" v-if="formWallActif">Créer un post</button>
            <button type="button" class="btn btn-danger" v-on:click="cancelPost ()" v-if="!formWallActif">Annuler le post</button>
        </div>

        <div class="wallForm" v-if="!formWallActif">
            <form @submit.prevent="formPostToWall">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Titre:</span>
                    </div>
                    <input type="text" class="form-control" pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$" v-model="title">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Texte:</span>
                    </div>
                    <textarea class="form-control" pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$" v-model="content" ></textarea>
                </div>

                <div v-if="!image">
                    <h4>Ajouter une image</h4>
                    <input type="file" @change="onFileChange">
                </div>
                <div v-else>
                    <img :src="image" /><br /><br />
                    <button @click="removeImage">Supprimer l'image</button>
                    </div>
                <br /><br />
                <button class="btn btn-success" type="submit">Poster et voir sur le WALL !</button>
            </form>   
        </div>

        <div class="wallPosts" v-if="formWallActif">
                <article class="articlePost" v-for="wallpost in wallPosts" :key="wallpost.id"> 
                    <div class="post-element" v-html="decodeURI(wallpost.title)"></div>
                    <div class="post-element">Ecrit par: {{ wallpost.userPseudo }} </div>
                    <div class="post-element" v-html="decodeURI(wallpost.content)"></div>
                    <div class="post-element" v-if="wallpost.urlImage"><img :src="wallpost.urlImage"></div>
                </article>                                   
        </div>
    </div>
</template>
<script>
const axios = require('axios').default;

export default {
  name: 'WallComponent',
    data () {
        return{
            error: null,
            title: null,
            content: null,
            userId: null,
            wallPosts: null,
            formWallActif: true,
            Admin: false,
            image: ''
        }        
    },
    mounted() {
        if(localStorage.authUser) {
            this.userId = localStorage.authUser;
        }
    },
    methods:{
        onFileChange(e) { 
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) { //onload file
            var reader = new FileReader();
            var vm = this;
            vm.image = new Image();
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
            },
        removeImage: function () { //remove image
            this.image = '';
        },
        affichageWall (){ //display the wall
            axios.get('http://localhost:3000/api/wall/',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })  
            .then(reponse => this.wallPosts = reponse.data)
            .catch(error => console.log(error));
        },
        newPost (){ // anymore display the active window
            this.formWallActif =  false 
        },
        cancelPost (){ //display the active window
            this.formWallActif = true 
        },
        formPostToWall (){ //post on the wall
            if (this.title == null || this.content == null) { //not validation if title and content are NULL
                return false;
            }
            axios.post('http://localhost:3000/api/wall/',{
                title: this.title,
                content: this.content,
                imageUrl: this.image,
                userId: this.userId
            },{
            headers: {
                authorization: localStorage.authUserToken //identification in the localstarage
            }
            }) 
            .then(function (response) {
                if(response.status == 200){ //if post is well recording
                    window.location.reload(); 
                }else{
                    localStorage.setItem("messageNav", "Erreur dans le traitement sur le serveur !");
                }
            })
            .catch(function (error) {
              console.log(error);
            });               
        }, 
    },
    beforeMount(){ 
        this.affichageWall() 
        if(localStorage.authUser && localStorage.levelUser == 4){//Always need to verify if it's the administrator before mounted
        this.Admin = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wall{
    width: 98%;
    margin: auto;
        h1{
            margin-top: 4%;
        }
}
.wallButton{
    margin-top: 2%;
}
.wallPosts, .wallForm{
    margin-top: 2%;
}
.post-element{
    flex-basis: 100%;
}
.articlePost{
    border: 2px solid #515C6B;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
}

.post-element:nth-child(1){ 
    font-size: 1.1em;
    text-align: left; 
    padding-left: 1%;
    color: white;
    background-color: #515C6B;
}
.post-element:nth-child(2){ 
    font-size: 0.8em;
    text-align: right;
    padding-right: 1%;
    border-top: 1px solid #515C6B;
    font-weight: bolder;
}
.post-element:nth-child(3){ 
    font-size: 1.2em;
    padding: 5%;
    background-color: grey;
    text-align: center;
    border-top: 1px solid #515C6B;   
    color: white;
}
.post-element:nth-child(4){ 
    border-top: 1px solid #515C6B;
    padding: 3%;
}
.post-element:nth-child(5){ 
    text-align: right;
    border-top: 1px solid #515C6B;
    padding: 1%;   
}
.input-group{ 
    margin-bottom: 3%;
}
</style>