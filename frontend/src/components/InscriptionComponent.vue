<template>
    <div class="inscription">
        <h1>Inscription</h1>
            <b-form @submit.prevent="formInscription">
                <b-form-group id="input-group-1" label-for="input-1" description="">
                    <b-form-input id="input-1" v-model="pseudo" type="text" required pattern="^[^&amp;<>@&quot;()'!_$*€£`+=\/;?#]+$" placeholder="Choisissez un pseudo..."></b-form-input>
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
    }
}
</script>