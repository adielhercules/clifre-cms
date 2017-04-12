import { login } from '../../../api';
import {
  USER_AUTHENTICATION_REQUEST,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_ERROR,
} from '../../../actions';

export default (values) => {
  return (dispatch) => {
    dispatch({ type: USER_AUTHENTICATION_REQUEST, values });

    return login(values)
      .then(({ accessToken }) => {
        dispatch({ type: USER_AUTHENTICATION_SUCCESS, token: accessToken });
        console.log('[logged in]', accessToken);
      })
      .catch(error => {
        console.log('[error]', error);
        dispatch({ type: USER_AUTHENTICATION_ERROR, error });
      });
  }
}
