import { login } from '../../../api';

export default (values) => {
  return () => {
    return login(values)
      .then(response => {
        console.log('[Created]', response);
      })
      .catch(err => {
        console.log('[error]', err);
      });
  }
}
