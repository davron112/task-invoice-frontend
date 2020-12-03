import client from 'api-client'
import axios from 'axios'

export default {
  fetchItems ({commit}) {
        axios
        .get('https://taskapi.achilov.dev/invoices')
        .then(response => {
          const { data } = response
          commit('setItems', data)
        })
  },
  createInvoice ({commit}, payload) {
        axios
        .post('https://taskapi.achilov.dev/invoices/create', payload)
        .then(response => {
          commit('setItems', response.data)
        })
  },
  fetchPayments ({commit}) {
    return client
      .fetchItems()
      .then(items => commit('setInvoiceItems', items))
  }
}

