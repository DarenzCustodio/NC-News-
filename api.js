import axios from "axios";

const instance = axios.create({
  baseURL: "https://news-data-app.onrender.com/api",
  timeout: 1000,
});

export const getArticles = () => {
  return instance.get(`/articles`).then((response) => {
    return response;
  });
};

export const getArticleById = ({ article_id }) => {
  return instance.get(`/articles/${article_id}`).then((response) => {
    return response;
  });
};
