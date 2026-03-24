import React, { useState, useEffect } from 'react';

const Card = () => {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const accessToken = localStorage.getItem("access_token");

    fetch("http://127.0.0.1:8000/api/boards/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setBoard(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="border-black rounded-2xl shadow-black shadow-2xl text-center">
      {board.map((boards) => (
      
        <div key={boards.id}>
          <h1 className="text-4xl font-head p-5 m-5 font-bold">
            {boards.title}
          </h1>

          <p className="font-bold font-head">
            {boards.owner}
          </p>

          <p className="font-semibold font-head">
            {boards.created_at}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;