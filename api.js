import axios from "axios";

export const getArticles = () => {
  return axios
    .get(`https://news-data-app.onrender.com/api/articles`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
