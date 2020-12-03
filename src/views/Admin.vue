<template>
  <v-card
      class="mx-auto mt-10"
      max-width="800"
  >
    <invoice-form/>
    <v-data-table
        :headers="headers"
        :items="invoices"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InvoiceForm from "@/views/InvoiceForm";

export default {
  name: 'Admin',
  components: {
    InvoiceForm
  },
  data() {
    return {
      id: null
    }
  },
  computed: {
    ...mapGetters([
      'headers',
      'invoices'
    ])
  },
  mounted() {
    this.fetchInvoiceItems();
    this.getId();
  },
  methods: {
    ...mapActions(['fetchInvoiceItems']),
    getId() {
      if (this.$route.params.id) {
        this.id = this.$route.params.id;
      }
    }
  }
}
</script>
