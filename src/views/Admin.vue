<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-btn color="success" class="mb-5" @click="dialog = true">Add invoice</v-btn>
      <invoice-form :dialog="dialog"/>
      <v-col class="mb-5" cols="12" lg="12" sm="1" md="12" v-for="(item, index) in invoices"
             :key="index">
        <v-card
            class="pa-2"
        >
          <div><b>School Name</b>: {{ item.school_name }}</div>
          <div><b>Description</b>: {{ item.description }}</div>
          <div><b>Amount</b>: {{ item.amount }}</div>
          <div><b>Payment status</b>: <v-badge :color="item.status === 'PAID' ? 'success': 'info'" :content="item.status"></v-badge></div>
          <div><b>Invoice link</b>: {{ item.link }}</div>
          <div><b>Payer name</b>: {{ item.full_name }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InvoiceForm from "@/views/InvoiceForm";
import axios from "axios";

export default {
  name: 'Admin',
  data() {
    return {
      id: null,
      form: {
        invoice_id: '',
        email: ''
      },
      dialog: false
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
  components: {
    InvoiceForm
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
