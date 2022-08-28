document.body.style = 'font-family: sans-serif'

const form = document.querySelector('form')
form.style = `
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const couponsObj = {
  'summer': 10,
  'spring': 15,
  'winter': 20,
  'autumn': 10,
}


form.addEventListener('submit', calculatePrice)

const price = document.querySelector('#price')
const coupon = document.querySelector('#coupon')
const spanFinalPrice = document.querySelector('#finalPrice')

function calculatePrice(event) {
  event.preventDefault()
  spanFinalPrice.textContent = ''

  let priceValue = price.value
  let couponValue = coupon.value
  let discount = 0

  if (couponsObj[couponValue]) {
    discount = couponsObj[couponValue]
  } else {
    spanFinalPrice.textContent = 'Cupón no valido'
    return
  }
  const finalPrice = (priceValue * (100 - discount) / 100)
  spanFinalPrice.textContent = '$' + finalPrice
}