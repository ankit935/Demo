import axios from 'axios';
import {failer, request, response} from '../actions/data';

export const getRealData = () => {
  return async dispatch => {
    dispatch(request());
    await axios
      .get('https://api.partner.winty.app/api/v1/ecomm-fe/get-products', {
        headers: {
          auth: 'ERRZcMfEPfXG8bGF',
          userid: '0',
          platform: 'mobile',
          partnerid: '95',
          page: '1',
        },
      })
      .then(res => {
        setTimeout(() => {
          dispatch(response(res.data));
        }, 100);
      })
      .catch(e => {
        dispatch(failer(e));
      });
  };
};
// export const getData = () => {
//   return async dispatch => {
//     dispatch(request());
//     await axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         setTimeout(() => {
//           dispatch(response(res.data));
//         }, 3000);
//       })
//       .catch(e => {
//         dispatch(failer(e));
//       });
//   };
// };
