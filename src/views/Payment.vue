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
            Status
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
            v-for="(item, index) in payments"
            :key="index"
        >
          <td>{{ item.schoolName }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.fullName }}</td>
          <td><v-btn :disabled="item.status === 'PAYED'" @click="pay(item.id)">PAY</v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Pay
        </v-card-title>
        <v-card-actions>
          <v-row>
            <v-col
                cols="12"
                sm="12"
                md="12"
            >
              <v-text-field
                  label="Full Name*"
                  required
                  v-model="form.full_name"
              ></v-text-field>
            </v-col>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="postPay"
            >
              Pay
            </v-btn>
          </v-row>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'User',
  data() {
    return {
      dialog: false,
      form: {
        id: '',
        full_name: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'payments'
    ])
  },
  created() {
    this.fetchPayments()
  },
  methods: {
    ...mapActions(['fetchPayments', 'addPay']),
    pay(id) {
      this.form.id = id
      this.dialog = true
    },
    postPay() {
      this.addPay(this.form)
      this.dialog = false
      this.fetchPayments()
      location.reload()
    }
  }
}
</script>
