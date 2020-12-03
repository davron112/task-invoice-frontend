<template>
  <v-card
      class="mx-auto mt-10"
      max-width="1200"
  >
    <invoice-form/>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            School Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Payment status
          </th>
          <th class="text-left">
            Invoice link
          </th>
          <th class="text-left">
            Payer name
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in invoices"
            :key="index"
        >
          <td>{{ item.school_name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.link }}</td>
          <td>{{ item.full_name }}</td>
          <td>
            <button v-clipboard="item.link">
                  Copy to clipboard
            </button>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
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
