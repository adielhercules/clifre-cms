import { genOptions, route, fetchRequest, fetchMockRequest } from './utils/api';

export function getSettings({ token }) {
  const url = route('/settings.json');
  const options = genOptions('GET', null, token);

  return fetchRequest(url, options);
}

export function login(userData) {
  const url = route('/authenticate');
  const options = genOptions('POST', userData, null);

  return fetchRequest(url, options);
}

export function createAccount(userData) {
  const url = route('/users');
  const options = genOptions('POST', userData, null);

  const mockResponse = [
    200,
    {
      accessToken: Math.random() * 100,
    }
  ];

  return fetchMockRequest(url, options, mockResponse);
}
