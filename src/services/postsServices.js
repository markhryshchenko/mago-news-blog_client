import axios from "axios";

const apiUrl = "http://localhost:8080";
/* const testUrl = 'https://jsonplaceholder.typicode.com/users' */

/* --------==========changes path users !!!!*/
export async function getPosts() {
  const response = await axios.get(`${apiUrl}/api/posts/`);
  return response.data;
}
export async function addPosts(newLabel) {
  const response = await axios.post(`${apiUrl}/api/post/`, newLabel, {});
  return response;
}
/* ------====== */
export async function deletePosts(id) {
  const response = await axios.delete(`${apiUrl}/api/post/${id}`);
  return response;
}

export async function editPosts(newLabel, id) {
  const response = await axios.put(`${apiUrl}/api/label/${id}`, newLabel, {});
  return response;
}
