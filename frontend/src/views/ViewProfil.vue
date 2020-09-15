<template>
  <div class="home">
    <ProfilComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilComponent from '@/components/ProfilComponent.vue'

export default {
  name: 'ProfilView',
  components: {
    ProfilComponent
  }
}
</script>