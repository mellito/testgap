import axios from "axios";
export const getPost = () => {
  const post = axios
    .get(`https://gorest.co.in/public/v2/comments `)
    .then((response) => {
      return response.data;
    });
  return post;
};
