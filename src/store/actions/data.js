import {ERROR, REQUEST, RESPONSE} from '../constants/types';

export const request = () => {
  return {
    type: REQUEST,
  };
};
export const response = payload => {
  return {
    type: RESPONSE,
    payload,
  };
};
export const failer = payload => {
  return {
    type: ERROR,
    payload,
  };
};
