import axios from "axios";

export const getArticles = () => {
  return axios
    .get(`https://news-data-app.onrender.com/api/articles`)
    .then((response) => {
      return response;
    });
};

export const getArticleById = ({ article_id }) => {
  return axios
    .get(`https://news-data-app.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response;
    });
};
