import { CHECKOUT_BOOKING } from "../type.js";

const initialState = {};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
};

export default checkout;
