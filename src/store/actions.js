import axios from 'axios'

export default {
  fetchInvoiceItems ({commit}) {
        axios
        .get('https://taskapi.achilov.dev/api/invoices')
        .then(response => {
          const { data } = response
          commit('setInvoiceItems', data)
        })
  },
  createInvoice ({commit}, payload) {
      axios
        .post('https://taskapi.achilov.dev/api/invoices/create', payload)
        .then(response => {
            commit('setInvoiceItems', response.data)
            commit('changeStatusPopup', false)
        })
  },
  addPay ({commit}, payload) {
      axios
        .post('https://taskapi.achilov.dev/api/payments/create', payload)
        .then(response => {
            commit('setPaymentsItems', response.data)
            commit('changeStatusPopup', false)
        })
  },
  fetchPayments ({commit}) {
      axios
          .get('https://taskapi.achilov.dev/api/payments')
          .then(response => {
              const { data } = response
              commit('setPayments', data)
          })
  },
  fetchUsers ({commit}) {
      axios
          .get('https://taskapi.achilov.dev/api/users')
          .then(response => {
              const { data } = response
              commit('setUserItems', data)
          })
  }
}

