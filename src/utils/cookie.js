import Cookie from 'js-cookie'

const key = 'sessionid';
export let getToken = () => {
  return Cookie.get(key);
};

export let removeToken = () => {
  Cookie.remove(key);
};