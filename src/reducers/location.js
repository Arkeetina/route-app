const INITIAL_STATE = { defaultMsg: 'WELCOME TO ROUTE APP' };


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROUTE_SUCESS':
      return {
        path: action.res.data.path,
        totalDistance: action.res.data.total_distance,
        totalTime: action.res.data.total_time,
      };
    case 'SET_ROUTE_FAIL':
      return {
        routeFailStatus: action.res.data.error,
      };
    case 'SET_ROUTE_IN_PROGRESS':
      return {
        routeInProgStatus: action.res.data.status,
      };
    case 'SET_ERROR':
      return {
        serverError: action.error.response.status,
      };
    default:
      return state;
  }
};
