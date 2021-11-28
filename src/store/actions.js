import { SET_BLOG, SET_BLOGS } from "./actionType";
import server from "../apis/server";

export function createBlog(payload) {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "POST",
        url: "/blogs",
        data: payload,
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

export function editBlog(payload) {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "PUT",
        url: `/blogs/${payload.id}`,
        data: payload,
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

export function deleteBlog(id) {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "DELETE",
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

export function getStatistics() {
  return () => {
    return new Promise((resolve, reject) => {
      server({
        method: "GET",
        url: `/statistics`,
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
