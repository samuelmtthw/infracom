import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { alertError } from "../apis/swal";
import { getBlog } from "../store/actions";

export default function Details() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState({});
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getBlog(id))
      .then((result) => {
        setIsLoading(false);
        setBlog(result);
      })
      .catch((err) => {
        alertError(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="Details" className="page">
        <div className="wrapper py-5 mx-4">
          <div className="h-75 d-flex justify-content-center align-items-center">
            <h3 className="text-muted">Fetching data...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="Details" className="page">
      <div className="wrapper py-5 mx-4">
        <h4 className="">{blog.title}</h4>
        <small className="d-inline-block text-muted mb-2">
          Author: {blog.author}
        </small>
        <img src={blog.thumbnail} alt="thumbnail" className="w-100" />
        <hr />
        <p>
          {blog.content} <br />
        </p>
        <Link to="/" className="btn btn-secondary mt-4 ">
          Back
        </Link>
      </div>
    </section>
  );
}
