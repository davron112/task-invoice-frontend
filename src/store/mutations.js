export default {
  setPayments (state, items) {
    state.payments = items
  },
  changeStatusPopup (state, status) {
    state.activePopup = status
  },
  activeInvoice (state, data) {
    state.activeInvoice = data
  },
  setInvoiceItems (state, items) {
    state.invoices = items
  },
  setUserItems (state, items) {
    state.users = items
  }
}
