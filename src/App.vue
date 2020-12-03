<template>
  <v-app id="inspire">

    <app-navigation></app-navigation>

    <app-content></app-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import AppContent from '@/components/AppContent.vue';

export default {
  name: 'App',
  components: {
    appNavigation: NavigationDrawer,
    AppContent
  }
};
</script>
