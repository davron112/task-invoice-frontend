<template>
  <v-navigation-drawer
    :value="drawer"
    app
    clipped
  >
    <v-list dense>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title><router-link to="/admin">Admin</router-link></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title><router-link to="/user">User</router-link></v-list-item-title>
        </v-list-item-content>
      </v-list-item>


    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'navigation-drawer',
  computed: {
    ...mapGetters(['drawer'])
  }
}
</script>
