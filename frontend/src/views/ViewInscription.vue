<template>
  <div class="home">
    <InscriptionComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import InscriptionComponent from '@/components/InscriptionComponent.vue'

export default {
  name: 'InscriptionView',
  components: {
    InscriptionComponent
  }
}
</script>