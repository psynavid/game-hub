import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "201d5e9ca8e94ef7adf77d876bfd30fa",
  },
});
