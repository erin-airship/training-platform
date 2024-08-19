const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`training-token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`training-token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`training-token`);
  },
};

export default storage;
