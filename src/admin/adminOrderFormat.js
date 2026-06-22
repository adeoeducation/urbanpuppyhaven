export function formatOrderMoney(order) {
  const currency = (order.currency || 'usd').toUpperCase()
  const amount = (Number(order.total_cents || 0) / 100).toFixed(2)
  return currency === 'USD' ? `$${amount}` : `${currency} ${amount}`
}

export function orderCustomer(order) {
  const name = order.customer_name || ''
  const email = order.customer_email || ''
  if (name && email) return `${name} / ${email}`
  return name || email || 'Guest checkout'
}

export function orderItemSummary(order) {
  return (order.order_items || [])
    .map((item) => {
      const options = [item.size, item.colorway_id].filter(Boolean).join(' / ')
      return `${item.quantity}x ${item.name}${options ? ` (${options})` : ''}`
    })
    .join(', ')
}
