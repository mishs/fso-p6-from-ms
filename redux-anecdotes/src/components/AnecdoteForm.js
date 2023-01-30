import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnecdote(inputEl.current.value));
    inputEl.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputEl} />
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
