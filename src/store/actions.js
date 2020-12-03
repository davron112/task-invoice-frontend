import axios from 'axios'

export default {
  fetchInvoiceItems ({commit}) {
        axios
        .get('https://taskapi.achilov.dev/invoices')
        .then(response => {
          const { data } = response
          commit('setInvoiceItems', data)
        })
  },
  createInvoice ({commit}, payload) {
        axios
        .post('https://taskapi.achilov.dev/invoices/create', payload)
        .then(response => {
            commit('setInvoiceItems', response.data)
            commit('changeStatusPopup', true)
        })
  },
  fetchPayments ({commit}) {
      axios
      .then(items => commit('setPayments', items))
  }
}

