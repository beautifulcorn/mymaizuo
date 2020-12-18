import axios from "axios";

axios.interceptors.response.use((ret) => {
  return ret.data || ret;
});

// axios.interceptors.request.use()

export default axios;