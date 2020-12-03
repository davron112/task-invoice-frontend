<template>
  <v-card
      class="mx-auto mt-10"
      max-width="800"
  >
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
            Amount
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
            v-for="(item, index) in invoices"
            :key="index"
        >
          <td>{{ item.schoolName }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.fullName }}</td>
          <td><v-btn @click="pay(item.id)">PAY</v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapGetters([
      'payments'
    ])
  },
  created() {
    this.fetchPayments()
  },
  methods: {
    ...mapActions(['fetchPayments']),
    pay() {
      //
    }
  }
}
</script>
