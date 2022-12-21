import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Make user to Admin!");
    if (proceed) {
      const user = data;
      fetch("https://portfolio-project-server.onrender.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            reset();
            alert("Admin has been made successfully!");
          } else {
            reset();
            alert("Wrong Person!");
          }
        });
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "26vh" }}
    >
      <div>
        <h2 style={{ marginBottom: "14px", fontSize: "36px" }}>
          Make <span style={{ color: "crimson" }}>Admin</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "300px",
              height: "25px",
              padding: "15px",
            }}
            {...register("email")}
          />
          <input
            type="submit"
            style={{
              backgroundColor: "crimson",
              color: "white",
              border: "none",
              height: "34.5px",
              width: "75px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
