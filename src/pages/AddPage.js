import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { alertError, alertSuccess } from "../apis/swal";
import { createBlog } from "../store/actions";

export default function AddPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    author: "",
    content: "",
    thumbnail: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createBlog(input))
      .then((result) => {
        navigate("/");
        alertSuccess(`New blog added with id: ${result.id}`);
      })
      .catch((err) => {
        const message = err.message.join(", ");
        alertError(message);
      });
  };

  return (
    <section id="AddPage" className="page">
      <div className="wrapper py-5 mx-4 d-flex justify-content-center">
        <form
          data-testid="add-form"
          className="blogForm card p-4 shadow d-flex flex-column"
          onSubmit={submitForm}
        >
          <h3 className="mb-3">Add Blog</h3>

          <label className="mb-1 text-muted">
            Title
            <input
              onChange={handleInput}
              value={input.title}
              type="text"
              name="title"
              className="form-control mb-3"
            />
          </label>
          <label className="mb-1 text-muted">
            Author
            <input
              onChange={handleInput}
              value={input.author}
              type="text"
              name="author"
              className="form-control mb-3"
            />
          </label>
          <label className="mb-1 text-muted">
            Content
            <textarea
              onChange={handleInput}
              value={input.content}
              type="text"
              name="content"
              className="form-control mb-3"
              cols="30"
              rows="5"
            />
          </label>
          <label className="mb-1 text-muted">
            Thumbnail URL
            <input
              onChange={handleInput}
              value={input.thumbnail}
              type="url"
              name="thumbnail"
              className="form-control mb-3"
            />
          </label>
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
