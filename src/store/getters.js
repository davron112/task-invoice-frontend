export default {
  headers: state => state.headers,
  payments: state => state.payments,
  invoices: state => state.invoices,
  getActiveInvoice: state => state.activeInvoice,
  getActivePopup: state => state.activePopup,
}
