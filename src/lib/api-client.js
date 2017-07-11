import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://praktyki-react.herokuapp.com",
  headers: { "Content-Type": "application/json", Accept: "application/json" }
});

const configureApi = store => {
  apiClient.interceptors.request.use(
    function(config) {
      const state = store.getState();
      if (state.user.token) {
        config.headers["X-User-Email"] = state.user.email;
        config.headers["X-User-Token"] = state.user.token;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
};

export { configureApi };
export default apiClient;
