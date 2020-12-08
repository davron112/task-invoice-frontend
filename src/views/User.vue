<template>
  <v-row>
      <div class="mx-5" v-if="form.status === 'PAID'">
        <h2>This invoice has already been paid</h2>
      </div>
      <v-card v-else v-show="!payed">
        <v-card-title>
          <span class="headline">Pay to invoice</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="School name*"
                    required
                    disabled
                    v-model="form.school_name"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-textarea
                    label="Description*"
                    disabled
                    v-model="form.description"
                    required
                ></v-textarea>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-text-field
                    label="Amount*"
                    persistent-hint
                    required
                    disabled
                    v-model="form.amount"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-text-field
                    label="Full Name*"
                    persistent-hint
                    required
                    v-model="form.full_name"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="blue darken-1"
              text
              @click="formSubmit"
          >
            Pay
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from "axios";
export default {
  name: "InvoiceForm",
  data() {
    return {
      payed: false,
      form: {
        status: 'NEW',
        invoice_id: '',
        school_name: '',
        description: '',
        amount: 0,
        full_name: '',
      }
    }
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getActivePopup', 'getActiveInvoice'])
  },
  methods: {
    ...mapActions(['createInvoice', 'loadInvoice']),
    async formSubmit () {
      await axios
          .post('https://taskapi.achilov.dev/api/payments/create', this.form)
          .then(response => {
            this.payed = true
            alert(response.data.status)
          })
    }
  },
  created() {
    if (this.$route.params && this.$route.params.link) {
      this.loadInvoice(this.$route.params.link)
    }
  },
  watch: {
    getActiveInvoice(value) {
      this.form = value
    }
  }
}
</script>

<style scoped>

</style>
