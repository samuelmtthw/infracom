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
        setIsLoading(false);
      })
      .catch((err) => {
        alertError(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section
        id="HomePage"
        className="page
    "
      >
        <div className="wrapper my-3 mx-4">
          <Link className="btn btn-primary" to="/new-blog">
            <i className="fas fa-plus me-3"></i>
            create new blog
          </Link>
          <div className="h-50 d-flex justify-content-center align-items-center">
            <h3 className="text-muted">fetching data...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="HomePage"
      className="page
    "
    >
      <div className="wrapper my-3 mx-4">
        <Link className="btn btn-primary my-3" to="/new-blog">
          <i className="fas fa-plus me-3"></i>
          create new blog
        </Link>
        <div className="table-wrap">
          <table className="table">
            <thead className="thead-dark">
              <tr className="shadow">
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">author</th>
                <th scope="col" className="text-center">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((el) => {
                return (
                  <tr key={el.id} className="shadow">
                    <td className="align-middle">{el.id}</td>
                    <td className="align-middle">{el.title}</td>
                    <td className="align-middle">{el.author}</td>
                    <td className="d-flex flex-column">
                      <Link
                        to={`/blogs/${el.id}`}
                        className="btn border-primary text-primary me-1 my-1"
                      >
                        details
                      </Link>
                      <Link
                        to={`/update/${el.id}`}
                        className="btn border-secondary text-secondary me-1 my-1"
                      >
                        update
                      </Link>
                      <button className="btn border-danger text-danger me-1 my-1">
                        delete
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
