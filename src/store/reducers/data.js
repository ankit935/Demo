import {ERROR, REQUEST, RESPONSE} from '../constants/types';

const intialState = {
  usersData: [],
  error: '',
  loading: false,
};

export const fetchData = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESPONSE:
      return {
        ...state,
        loading: false,
        usersData: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
