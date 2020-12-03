<template>
  <v-card
      class="mx-auto mt-10"
      max-width="800"
  >
    <invoice-form :dialog="dialog"/>
    <v-data-table
        :headers="headers"
        :items="items"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import InvoiceForm from "@/views/InvoiceForm";

export default {
  name: 'Admin',
  components: {InvoiceForm},
  data() {
    return {
      id: null,
      dialog: false
    }
  },
  computed: {
    ...mapGetters([
      'headers',
      'items'
    ])
  },
  mounted() {
    this.getId();
  },
  methods: {
    getId() {
      if (this.$route.params.id) {
        this.id = this.$route.params.id;
      }
    },
    popupPayment() {
      this.dialog = true
    }
  }
}
</script>
