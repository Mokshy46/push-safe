import { useEffect, useState } from "react";

function Card() {

  const [boards, setBoards] = useState([]);

  useEffect(() => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc0MjA3NDgyLCJpYXQiOjE3NzQyMDY1ODIsImp0aSI6IjZiMGFiZTJmMjM4MzQ2NWViZThhNGQzNzYzNmY4MzQ4IiwidXNlcl9pZCI6IjMifQ.xwnq3JTh0Y2w64UIfH92VhTCn3eBHVfRTIpDSDjqYvg";

    const fetchBoards = async () => {

      try {
        const res = await fetch("http://127.0.0.1:8000/api/lists/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setBoards(data);
      }
      catch (err) {
        console.error(err);
      }
    };

    fetchBoards();
  }, []);

  return (

    <div>
      <h1 className=" text-3xl font-bold text-center"> Boards</h1>
      {boards.map((board) => (
        <div key={board.id}>{board.title}</div>
      ))}
    </div>
  );
}

export default Card;