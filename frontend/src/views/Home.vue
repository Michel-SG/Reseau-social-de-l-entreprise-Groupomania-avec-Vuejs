<template>
  <div class="home">
    <div id="ConnectionToApi"> Veuillez vous connectez !</div>
      <ConnectionComponent />
  </div>

</template>

<script>

import ConnectionComponent from '@/components/ConnectionComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ConnectionComponent
  }
}
</script>
<style scoped lang="scss">

#ConnexionToApi{
  margin-top: 5%;
  margin-bottom: 3%;
  color: red;
}

</style>