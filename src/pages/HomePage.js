import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { alertError } from "../apis/swal";
import { getBlogs } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getBlogs())
      .then((result) => {
        setBlogs(result);
      })
      .catch((err) => {
        alertError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section
        id="HomePage"
        className="page
      "
      >
        <div className="wrapper py-3 px-5 bg-secondary"></div>
      </section>
    );
  }

  return (
    <section
      id="HomePage"
      className="page
    "
    >
      <div className="wrapper py-3 px-5">
        <Link className="btn btn-primary" to="/new-blog">
          Add Blog
        </Link>
        <div className="table-wrap">
          <table className="table">
            <thead className="thead-dark">
              <tr className="shadow-sm">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((el) => {
                return (
                  <tr key={el.id} className="shadow-sm">
                    <td className="align-middle">{el.id}</td>
                    <td className="align-middle">{el.title}</td>
                    <td className="align-middle">{el.author}</td>
                    <td>
                      <Link
                        to={`/blogs/${el.id}`}
                        className="btn btn-primary me-1 my-1"
                      >
                        Details
                      </Link>
                      <Link
                        to={`/update/${el.id}`}
                        className="btn btn-secondary me-1 my-1"
                      >
                        Update
                      </Link>
                      <button className="btn btn-danger me-1 my-1">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
