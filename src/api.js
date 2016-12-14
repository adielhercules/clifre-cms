import { genOptions, route, fetchRequest } from './utils/api';

export function getSettings({ token }) {
  const url = route('/settings.json');
  const options = genOptions('GET', null, token);

  return fetchRequest(url, options);
}
