import axios from 'axios'

export default {
    async fetchInvoiceItems ({commit}) {
       await axios
        .get('https://taskapi.achilov.dev/api/invoices')
        .then(response => {
          const { data } = response
          commit('setInvoiceItems', data)
        })
     },
  async createInvoice ({commit}, payload) {
     await axios
        .post('https://taskapi.achilov.dev/api/invoices/create', payload)
        .then(response => {
            commit('setInvoiceItems', response.data)
            commit('changeStatusPopup', false)
        })
  },
  async addPay ({commit}, payload) {
     await axios
        .post('https://taskapi.achilov.dev/api/payments/create', payload)
        .then(response => {
            commit('setPaymentsItems', response.data)
            commit('changeStatusPopup', false)
        })
  },
    async fetchPayments ({commit}) {
      await axios
          .get('https://taskapi.achilov.dev/api/payments')
          .then(response => {
              const { data } = response
              commit('setPayments', data)
          })
  },
    async fetchUsers ({commit}) {
        await axios
          .get('https://taskapi.achilov.dev/api/users')
          .then(response => {
              const { data } = response
              commit('setUserItems', data)
          })
  }
}

