<template>
  <div class="connexion">
    {{messageNavigation}}
      <h1>Connexion</h1>
      <b-form @submit.prevent="formConnexion">
        <b-form-group id="input-group-1" label-for="input-1" description="">
          <b-form-input id="input-1" v-model="email" type="email" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" placeholder="Saisissez votre adresse mail..."></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" v-model="password" type="password" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" placeholder="Saisissez votre mot de passe..."></b-form-input>
        </b-form-group>
        <button class="btn btn-primary" type="submit">Connexion</button>
      </b-form>
  </div>
</template>
<script>

export default {
    name: 'ConnectionComponent',
    data() {
        return{
        email: '',
        password: '' , 
        messageNavigation: null,
        }
    }
}
</script>