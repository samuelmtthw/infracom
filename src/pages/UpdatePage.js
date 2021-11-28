import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

import { editBlog, getBlog } from "../store/actions";
import { alertError, alertSuccess } from "../apis/swal";

export default function UpdatePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [input, setInput] = useState({
    title: "",
    author: "",
    content: "",
    thumbnail: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(editBlog(input))
      .then((result) => {
        alertSuccess(result.message);
        navigate("/");
      })
      .catch((err) => {
        const message = err.message.join(", ");
        alertError(message);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    dispatch(getBlog(id))
      .then((result) => {
        setInput({ ...input, ...result });
        setIsLoading(false);
      })
      .catch((err) => {
        alertError(err.message);
        navigate("/");
      });
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <section id="UpdatePage" className="page">
        <div className="wrapper py-5 mx-4 d-flex justify-content-center">
          <div className="h-50 d-flex justify-content-center align-items-center">
            <h3 className="text-muted">fetching data...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="UpdatePage" className="page">
      <div className="wrapper py-5 mx-4 d-flex justify-content-center">
        <form
          className="blogForm card p-4 shadow d-flex flex-column"
          onSubmit={submitForm}
        >
          <h3 className="mb-3">Update Blog</h3>

          <label className="mb-1 text-muted">Title</label>
          <input
            onChange={handleInput}
            value={input.title}
            type="text"
            name="title"
            className="form-control mb-3"
          />
          <label className="mb-1 text-muted">Author</label>
          <input
            onChange={handleInput}
            value={input.author}
            type="text"
            name="author"
            className="form-control mb-3"
          />
          <label className="mb-1 text-muted">Content</label>
          <textarea
            onChange={handleInput}
            value={input.content}
            type="text"
            name="content"
            className="form-control mb-3"
            cols="30"
            rows="5"
          />
          <label className="mb-1 text-muted">Thumbnail URL</label>
          <input
            onChange={handleInput}
            value={input.thumbnail}
            type="url"
            name="thumbnail"
            className="form-control mb-3"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-3"
          />
          <Link to="/" className="btn btn-secondary mt-2">
            Back
          </Link>
        </form>
      </div>
    </section>
  );
}
