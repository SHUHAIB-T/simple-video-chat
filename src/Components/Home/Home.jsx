import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [roomcode, setRoomcode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomcode) {
      navigate(`/room/${roomcode}`);
    }
  };
  return (
    <>
      <div className="container">
        <h1>This is a sample video call app </h1>
        <form onSubmit={handleSubmit} className="join-room-form">
          <label>Enter the room code</label>
          <input
            onChange={(e) => setRoomcode(e.target.value)}
            type="text"
            placeholder="enter the room code"
          />
          <button type="submit" className="join-btn">
            Join
          </button>
        </form>
      </div>
    </>
  );
}
