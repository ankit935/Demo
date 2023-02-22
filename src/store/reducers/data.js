import {
  ERROR,
  ERROR_SINGLE,
  REQUEST,
  REQUEST_SINGLE,
  RESPONSE,
  RESPONSE_SINGLE,
} from '../constants/types';

const intialState = {
  usersData: [],
  error: '',
  loading: false,
  // productDetails: [],
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

// export const fetchSingleData = (state = intialState, action) => {
//   switch (action.type) {
//     case REQUEST_SINGLE:
//       return {
//         ...state,
//         loading: true,
//       };
//     case RESPONSE_SINGLE:
//       return {
//         ...state,
//         loading: false,
//         productDetails: action.payload,
//       };
//     case ERROR_SINGLE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//   }
// };
