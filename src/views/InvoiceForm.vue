<template>
  <v-row>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="700px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Create a new invoice</span>
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
                    v-model="form.amount"
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
              @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="formSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "InvoiceForm",
  data() {
    return {
      form: {
        description: '',
        amount: 0,
        school_name: '',
        user_id: '',
      }
    }
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.$route.query.userId) {
      this.dialog = true
      this.form.user_id = this.$route.query.userId
    }
  },
  computed: {
    ...mapGetters(['getActivePopup'])
  },
  methods: {
    ...mapActions(['createInvoice']),
    formSubmit() {
      this.createInvoice(this.form)
      this.dialog = this.getActivePopup;
      this.fetchInvoiceItems()
      
      this.form.description =  ''
      this.form.amount = 0
      this.form.school_name = ''
      this.form.user_id = ''
    }
  },
  watch: {
    getActivePopup(value) {
      this.dialog = value
    }
  }
}
</script>

<style scoped>

</style>
