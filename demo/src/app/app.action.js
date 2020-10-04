import {TYPE_ACTION} from './app.constant';
import {REQUEST, SUCCESS, FAILURE} from '../common/string-utils';

export const getImageApiAction = () => {
  return {
    type: REQUEST(TYPE_ACTION.GET_IMAGE_API),
  };
};

export const getImageApiActionSuccess = (imageSrc) => {
  return {
    type: SUCCESS(TYPE_ACTION.GET_IMAGE_API),
    payload: {
      imageSrc,
    },
  };
};

export const getImageApiActionFail = (err) => {
  return {
    type: FAILURE(TYPE_ACTION.GET_IMAGE_API),
    payload: {
      err,
    },
  };
};
