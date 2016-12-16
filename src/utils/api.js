'use strict';

const PROD_HOST = 'https://prod-api.herokuapp.com';
const DEV_HOST = 'http://localhost:3000';
export const HOST = process.env.NODE_ENV === 'development' ? DEV_HOST : PROD_HOST;

export function genOptions(method, data, authorization, extraHeaders) {
  method = method.toUpperCase();

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...extraHeaders
  };

  if (authorization) {
    headers.Authorization = authorization;
  }

  let options = {
    headers,
    method,
  };

  if (['PUT', 'POST'].indexOf(method) !== -1) {
    if (headers['Content-Type'] !== 'application/x-www-form-urlencoded') {
      options.body = JSON.stringify(data);
    }else {
      options.body = '';
    }
  }

  return options;
}

export function route(path) {
  if (path.indexOf('/') === 0) {
    path = `${HOST}${path}`;
  }

  return path;
}

export function fetchRequest(url, options) {
  return fetch(url, options)
    .then(isSuccessful)
    .then(getJson);
}

function ResponseException(response) {
  this.message = 'API response is not ok';
  this.response = response;
}

function AuthenticationException(response) {
  this.message = 'API authentication failed';
  this.response = response;
}

function isSuccessful(response) {
  if ([401, 419].indexOf(response.status) !== -1) {
    throw new AuthenticationException(response);
  } else if ([200, 201, 204].indexOf(response.status) === -1) {
    throw new ResponseException(response);
  }

  return response;
}

function getJson(response) {
  if (response.status === 204 || (response.status === 201 && response._bodyText === '')) {
    return true;
  } else {
    return response.json();
  }
}
