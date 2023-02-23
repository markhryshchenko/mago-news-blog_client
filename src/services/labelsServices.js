
import axios from "axios";

const apiUrl = "http://localhost:8080";
/* const testUrl = 'https://jsonplaceholder.typicode.com/users' */

/* --------==========changes path users !!!!*/
export async function getLabels() {
  const response = await axios.get(`${apiUrl}/api/label`);
  return response.data;
}

export async function deleteLabel(id) {
  const response = await axios.delete(`${apiUrl}/api/label/${id}`);
  return response;
}
export async function addLabel(newLabel) {
  const response = await axios.post(`${apiUrl}/api/label/`, newLabel, {
     });
  return response;
}


export async function editLabel(newLabel, id) {
  const response = await axios.put(`${apiUrl}/api/label/${id}`, newLabel, {
   
  });
  return response;
}
/* ------====== */
export async function getOneLabelOfPost(label_id) {
  const response = await axios.get(`${apiUrl}/api/label/${label_id}` )
  
  return response.data
}
