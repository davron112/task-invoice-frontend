<template>
  <v-card>
    <router-link to="admin">Admin</router-link>
    <br/>
    <router-link to="user">User</router-link>
  </v-card>
</template>
<script>

export default {
  data() {
    return {
      loading: true
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
