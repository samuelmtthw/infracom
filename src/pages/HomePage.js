import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { alertError, alertSuccess } from "../apis/swal";
import { deleteBlog, getBlogs } from "../store/actions";

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
  }, [dispatch]);

  const removeBlog = ({ id, name }) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are going to delete: ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBlog(id))
          .then((result) => {
            alertSuccess(result.message);
            const updatedBlogs = blogs.filter((el) => el.id !== Number(id));
            setBlogs(updatedBlogs);
          })
          .catch((err) => {
            alertError(err.message);
          });
      } else {
        alertSuccess("Processs canceled");
      }
    });
  };

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
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col" className="text-center">
                  Actions
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
                        Details
                      </Link>
                      <Link
                        to={`/update/${el.id}`}
                        className="btn border-secondary text-secondary me-1 my-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn border-danger text-danger me-1 my-1"
                        onClick={() => {
                          removeBlog({ id: el.id, name: el.title });
                        }}
                      >
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
