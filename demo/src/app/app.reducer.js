import {TYPE_ACTION} from './app.constant';
import {REQUEST, SUCCESS, FAILURE} from '../common/string-utils';

const initState = {
  loading: false,
  imageSrc: null,
  fail: null,
};

export default appReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST(TYPE_ACTION.GET_IMAGE_API):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(TYPE_ACTION.GET_IMAGE_API):
      return {
        ...state,
        loading: false,
        fail: null,
        imageSrc: action.payload.imageSrc,
      };
    case FAILURE(TYPE_ACTION.GET_IMAGE_API):
      return {
        ...state,
        loading: false,
        fail: action.payload.err,
      };
    default:
      return state;
  }
};
