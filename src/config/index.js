const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://tiagoflix.herokuapp.com";

export default {
  URL,
}