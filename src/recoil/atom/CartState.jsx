import { atom } from 'recoil'

const CartState = atom({
  key: 'cart',
  default: [],
})
export default CartState
