const INITIAL_STATE = {
  defaultMsg: 'WELCOME TO ROUTE APP',
  routeFailStatus: '',
  routeInProgStatus: '',
  path: '',
  totalDistance: '',
  totalTime: '',
  serverError: '',
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROUTE_SUCESS':
      return {
        ...state,
        path: action.res.data.path,
        totalDistance: action.res.data.total_distance,
        totalTime: action.res.data.total_time,
        defaultMsg: '',
        routeFailStatus: '',
        routeInProgStatus: '',
        serverError: '',
      };
    case 'SET_ROUTE_FAIL':
      return {
        ...state,
        routeFailStatus: action.res.data.error,
        defaultMsg: '',
        path: '',
        routeInProgStatus: '',
        totalTime: '',
        totalDistance: '',
        serverError: '',
      };
    case 'SET_ROUTE_IN_PROGRESS':
      return {
        ...state,
        routeInProgStatus: action.res.data.status,
        defaultMsg: '',
        path: '',
        routeFailStatus: '',
        totalTime: '',
        totalDistance: '',
        serverError: '',
      };
    case 'SET_ERROR':
      return {
        ...state,
        serverError: action.error.response.status,
        defaultMsg: '',
        path: '',
        routeFailStatus: '',
        routeInProgStatus: '',
        totalTime: '',
        totalDistance: '',
      };
    default:
      return state;
  }
};
