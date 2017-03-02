import { createAccount } from '../../../api';

export default (values) => {
  return () => {
    return createAccount(values)
      .then(response => {
        console.log('[Created]', response);
      })
      .catch(err => {
        console.log('[error]', err);
      });
  }
}
