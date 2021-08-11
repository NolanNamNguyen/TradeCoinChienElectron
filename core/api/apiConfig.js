/* eslint-disable func-names */
const axios = require('axios');
const mergeWidth = require('lodash').mergeWith;
const API_URL = require('./setting').API_URL;

const defaultOptions = {
  // withCredentials: true,
  'Content-Type': 'application/json'
};

function getApi(path, options = {}, apiURL) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, {
    ...options,
    headers: {
      ...options.headers,
      ...defaultOptions,
    },
  });
}

function postApi(path, data, options = {}, apiURL) {
  const headerParams = mergeWith(options.headers);
  if (apiURL) {
    return axios.post(`${apiURL || API_URL}${path.replace(/^\//, '')}`, data, {
      ...defaultOptions,
      ...options,
      headers: headerParams,
    });
  }

  return axios.post(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: headerParams,
  });
}

function putApi(path, data, options = {}) {
  return axios.put(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function deleteApi(path, options = {}) {
  return axios.delete(`${API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function uploadApi(path, files, options = {}, uploadSingle = false) {
  const formData = new FormData();
  uploadSingle
    ? files.forEach((file) => {
        formData.append(`file`, file);
      })
    : files.forEach((file, index) => {
        formData.append(`file[${index}]`, file);
      });

  return axios.post(`${API_URL}/${path.replace(/^\//, '')}`, formData, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
}

function redirectTo() {
  // if (get(Router, "router.route") !== ROUTER_LOGIN) {
  //   Router.push(ROUTER_LOGIN).then(() => Router.reload());
  // }
}

function checkErrorStatusApi(data) {
  let isCheck = false;
  if (data && data.status === 401) {
    isCheck = true;
  }
  return isCheck;
}

axios.interceptors.response.use(
  (response) => {
    if (checkErrorStatusApi(response)) {
      return redirectTo();
    }
    return response;
  },
  (error) => {
    if (checkErrorStatusApi(error.response)) {
      redirectTo();
    }
    return Promise.reject(error);
  },
);

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
  upload: uploadApi,
};

module.exports ={
  Api
}

