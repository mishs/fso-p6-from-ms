import React from "react";
import { useSelector } from "react-redux";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  console.log("ancedote in anecdotelist: ", anecdotes);
  // order anecdotes by votes
  anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <ul>
      {anecdotes &&
        anecdotes.map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </ul>
  );
};

export default AnecdoteList;
