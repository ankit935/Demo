import {
  ERROR,
  REQUEST,
  RESPONSE,
  ERROR_SINGLE,
  REQUEST_SINGLE,
  RESPONSE_SINGLE,
} from '../constants/types';

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
export const requestSingleProduct = () => {
  return {
    type: REQUEST_SINGLE,
  };
};
export const responseSingleProduct = payload => {
  return {
    type: RESPONSE_SINGLE,
    payload,
  };
};
export const failerSingleProduct = payload => {
  return {
    type: ERROR_SINGLE,
    payload,
  };
};
