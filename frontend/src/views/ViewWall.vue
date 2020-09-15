<template>
  <div class="wall">
    <WallComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import WallComponent from '@/components/WallComponent.vue'

export default {
  name: 'WallView',
  components: {
    WallComponent
  }
}
</script>