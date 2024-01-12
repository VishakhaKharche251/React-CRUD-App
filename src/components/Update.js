import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, navigate, useNavigate } from 'react-router-dom';

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://659fa4d55023b02bfe8a10cc.mockapi.io/crud-operations/${id}`,
      {
        name: name,
        email: email,
      }
    ).then(() => {
      navigate("/read");

    });

  };
  return (
    <>
      <h2 className='text-primary fw-bold' style={{ fontSize: "24px" }}>UPDATE USERS</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
        <Link to="/read">
          <button type="submit" className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </>
  )
}

export default Update