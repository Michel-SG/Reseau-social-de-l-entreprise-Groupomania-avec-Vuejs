<template>
    <div class="inscription">
        <h1>Inscription</h1>
            <b-form @submit.prevent="formInscription">
                <b-form-group id="input-group-1" label-for="input-1" description="">
                    <b-form-input id="input-1" v-model="pseudo" type="text" required pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" placeholder="Votre pseudo..."></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label-for="input-1" description="">
                    <b-form-input id="input-1" v-model="email" type="email" required pattern="^[^&amp;<>&quot;()'!_$*€£`+=\/;?#]+$" placeholder="Votre adresse mail..."></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label-for="input-1" description="">
                    <b-form-input id="input-1" v-model="password" type="password" required pattern="^[^&amp;<>'@&quot;`+=\/;?#]+$" placeholder="Choisissez un mot de passe..."></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label-for="input-1" description="">
                    <b-form-select v-model="level" :options="options"></b-form-select>
                </b-form-group>
                <button class="btn btn-primary" type="submit">Valider</button> <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
    </div>
</template>


<script>

const axios = require('axios').default;
export default {
    name: 'InscriptionComponent',
    data () {
        return{
            pseudo: null,
            email: null,
            password: null,

                level: null,
                options: [
                { value: null, text: 'Sélectionnez votre métier dans l\'entreprise...' },
                { value: '1', text: 'Technicien.ne'},
                { value: '2', text: 'Chef.e de centre'},
                { value: '3', text: 'Responsable de secteur'},
                { value: '4', text: 'Chargé.e de Communication'},
                { value: '5', text: 'Administrateur', disabled: true }
                ]
        }
    },
    methods:{
            formInscription (){
                if (this.pseudo == null || this.email == null || this.password == null || this.level == null) {
                    return false;
                }
                axios.post('http://localhost:3000/api/user/signup', {
                        pseudo: this.pseudo,
                        email: this.email,
                        password: this.password,
                        level: this.level})
                .then(function (response) {
                    if(response.status == 200 && response.data.id){ //signup is ok
                        console.log("inscrioption réussi")
                        localStorage.setItem("messageNav", "Inscription ok, veuillez vous identifer !");
                        window.location.replace("http://localhost:8080/"); //redirect to the login page
                    }else{
                        localStorage.setItem("messageNav", "Erreur dans l'inscription !");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset the form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
               
            },
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
b-button{
    margin: 3%;
}
</style>