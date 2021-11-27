import { SET_BLOG, SET_BLOGS } from "./actionType";
import server from "../apis/server";

export function getBlogs() {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "GET",
        url: "/blogs",
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  };
}

export function setBlogs(payload) {
  return {
    type: SET_BLOGS,
    payload: payload,
  };
}

export function getBlog(id) {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "GET",
        url: `/blogs/${id}`,
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  };
}

export function setBlog(payload) {
  return {
    type: SET_BLOG,
    payload: payload,
  };
}
