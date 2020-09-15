<template>
  <div class="wall">
    <AdminComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminComponent from '@/components/AdminComponent.vue'

export default {
  name: 'AdminView',
  components: {
    AdminComponent
  }
}
</script>