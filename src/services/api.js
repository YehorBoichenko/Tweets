/**

This module exports two functions to interact with an API endpoint /users.
It uses the axios library to make HTTP requests to the server.
It exports the following functions:
fetchUsers - a function that returns an array of user objects fetched from the API endpoint.
@param {number} page - optional argument, the page number for pagination. Default is 1.
@returns {Array} - an array of user objects. Each object contains user data such as id, name, etc.
updateUsers - a function that updates a user object in the API endpoint with the given userId.
@param {number} userId - the user id of the user object to update.
@param {number} userFollowers - the new value for the followers count of the user object.
@returns {Object} - the updated user object as returned from the API endpoint.
The module also defines a searchParams constant that contains a URLSearchParams object
that is used to generate the query string for the HTTP requests.
The base URL for the API is set as a default for the axios instance.
*/
import axios from "axios";
import { TOTAL_ITEMS_COUNT, BASE_URL_API } from "../utils/constants/constants";

axios.defaults.baseURL = BASE_URL_API;

const searchParams = new URLSearchParams({
  TOTAL_ITEMS_COUNT,
});

export const fetchUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUsers = async (userId, userFollowers) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, {
      followers: userFollowers,
    });

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
