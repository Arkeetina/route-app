import axios from 'axios';

// ROOT_URL value is stored here for the development only
const ROOT_URL = 'http://localhost:3000';

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

export const startSetRoute = (locations) => {
  return (dispatch) => {
    return axios.post(`${ROOT_URL}/route`, locations)
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
        axios.get(`${ROOT_URL}/route/${token}`)
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
