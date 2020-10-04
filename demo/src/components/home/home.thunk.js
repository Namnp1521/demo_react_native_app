import {REQUEST, SUCCESS, FAILURE} from '../../common/string-utils';
import {getRandomImageApi} from '../../common/api-utils';
import {TYPE_ACTION} from '../../app/app.constant';
import {
  getImageApiAction,
  getImageApiActionSuccess,
  getImageApiActionFail,
} from '../../app/app.action';

export const getImageApi = () => async (dispatch) => {
  try {
    dispatch(getImageApiAction());

    const idRandom = Math.floor(Math.random() * 100);
    const res = await getRandomImageApi(idRandom);
    // console.log(res);
    dispatch(getImageApiActionSuccess(res.data.download_url));
  } catch (error) {
    dispatch(getImageApiActionFail(error));
  }
};
