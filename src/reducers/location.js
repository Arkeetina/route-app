export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_ROUTE_SUCESS':
      return {
        // startOffLanLng: 
        // dropOffLanLng
        path: action.res.data.path,
        totalDistance: action.res.data.total_distance,
        totalTime: action.res.data.total_time,
      };
    case 'SET_ROUTE_FAIL':
      return {
        ...state,
        routeErrorMessage: action.res.data.error,
      };
    case 'SET_ROUTE_IN_PROGRESS':
      return {
        ...state,
        routeInProgMessage: action.res.data.status,
      };
    case 'SET_ERROR':
      return {
        ...state,
        serverError: action.error.response.status,
      };
    default:
      return state;
  }
};
