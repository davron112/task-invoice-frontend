<template>
  <v-card
      class="mx-auto mt-10"
      max-width="800"
  >
    <invoice-form :dialog="dialog" :userId="userId" />
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Full Name
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in getUsers"
            :key="index"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.full_name }}</td>
          <td><v-btn @click="createInvoice(item.id)">Create Invoice</v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import InvoiceForm from "@/views/InvoiceForm";

export default {
  name: 'User',
  computed: {
    ...mapGetters([
      'getUsers'
    ])
  },
  data() {
    return {
      userId: '',
      dialog: false
    }
  },
  components: {
    InvoiceForm
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers']),
    createInvoice(id) {
      this.userId = id;
      this.dialog = true;
    }
  }
}
</script>
