import axios from 'axios';
import {failer, request, response} from '../actions/data';

export const getData = () => {
  return async dispatch => {
    dispatch(request());
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('RES>>>>>', res);
        setTimeout(() => {
          dispatch(response(res.data));
        }, 3000);
      })
      .catch(e => {
        dispatch(failer(e));
      });
  };
};
