import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 5 });

const ROOT_URL = process.env.ROOT_URL;
const API_KEY = process.env.API_KEY;

export const setRouteSuccess = res => ({
  type: 'SET_ROUTE_SUCESS',
  res,
});

export const setRouteFailure = res => ({
  type: 'SET_ROUTE_FAIL',
  res,
});

export const setRouteInProgress = res => ({
  type: 'SET_ROUTE_IN_PROGRESS',
  res,
});

export const setError = error => ({
  type: 'SET_ERROR',
  error,
});

// alternative startSetRoute action creator with async await

// export const startSetRoute = (locations) => {
//   return async (dispatch) => {
//     dispatch({ type: 'SET_ROUTE' });
//     try {
//       const token = await axios.post(`${ROOT_URL}/gettoken/${API_KEY}`, locations);
//       const res = await axios.get(`${ROOT_URL}/getroute/${token.data.token}`);
//       if (res.data.status === 'success') {
//         dispatch(setRouteSuccess(res));
//       } else if (res.data.status === 'failure') {
//         dispatch(setRouteFailure(res));
//       } else if (res.data.status === 'in progress') {
//         dispatch(setRouteInProgress(res));
//       }
//     } catch(error) {
//       dispatch(setError(error));
//     }
//   }
// };

export const startSetRoute = (locations) => {
  return (dispatch) => {
    dispatch({ type: 'SET_ROUTE' });
    return axios.post(`${ROOT_URL}/gettoken/${API_KEY}`, {
      'axios-retry': {
        retries: 5,
      },
    }, locations)
      // POST request to submit locations to server
      .then((response) => {
        return response;
      })
      .catch((error) => {
        dispatch(setError(error));
      })
      .then(({ data }) => {
        const { token } = data;
        // GET request to fetch locations coordinates
        axios.get(`${ROOT_URL}/getroute/${token}`, { 'axios-retry': { retries: 5 } })
          .then((res) => {
            if (res.data.status === 'success') {
              dispatch(setRouteSuccess(res));
            } else if (res.data.status === 'failure') {
              dispatch(setRouteFailure(res));
            } else if (res.data.status === 'in progress') {
              dispatch(setRouteInProgress(res));
            }
          })
          .catch((error) => {
            dispatch(setError(error));
          });
      });
  };
};
