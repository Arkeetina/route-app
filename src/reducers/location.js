const INITIAL_STATE = {
  defaultMsg: 'WELCOME TO ROUTE APP',
  routeFailStatus: '',
  routeInProgStatus: '',
  path: '',
  totalDistance: '',
  totalTime: '',
  serverError: '',
  loading: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROUTE_SUCESS':
      return {
        ...state,
        ...INITIAL_STATE,
        defaultMsg: '',
        path: action.res.data.path,
        totalDistance: action.res.data.total_distance,
        totalTime: action.res.data.total_time,
      };
    case 'SET_ROUTE_FAIL':
      return {
        ...state,
        ...INITIAL_STATE,
        defaultMsg: '',
        routeFailStatus: action.res.data.error,
      };
    case 'SET_ROUTE_IN_PROGRESS':
      return {
        ...state,
        ...INITIAL_STATE,
        defaultMsg: '',
        routeInProgStatus: action.res.data.status,
      };
    case 'SET_ERROR':
      return {
        ...state,
        ...INITIAL_STATE,
        defaultMsg: '',
        serverError: action.error.response.status,
      };
    case 'SET_ROUTE':
      return {
        ...state,
        ...INITIAL_STATE,
        defaultMsg: '',
        loading: true,
      };
    default:
      return state;
  }
};
