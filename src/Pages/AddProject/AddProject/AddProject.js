import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/home");
  };

  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Add!");
    if (proceed) {
      fetch("https://quiet-shelf-64321.herokuapp.com/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("A New Project Added Successfully. Thanks!");
            reset();
          }
        });
    }
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <h2
        style={{ textAlign: "center", fontSize: "36px", marginBottom: "25px" }}
      >
        Add A New <span style={{ color: "crimson" }}>Project</span>
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "500px" }}>
          <input
            type="text"
            placeholder="Project name"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("title")}
          />
          <br />
          <input
            type="text"
            placeholder="Image"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("image")}
          />
          <br />
          <input
            type="text"
            placeholder="Project Serial No."
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("serial")}
          />
          <br />
          <textarea
            type="text"
            style={{
              width: "100%",
              height: "100px",
              marginBottom: "26px",
              padding: "15px",
            }}
            placeholder="Description..."
            required
            {...register("description")}
          />
          <br />
          <input
            style={{
              width: "100%",
              height: "35px",
              color: "white",
              backgroundColor: "crimson",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
            }}
            type="submit"
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleHomePage}
          style={{
            width: "500px",
            height: "35px",
            marginTop: "26px",
            color: "white",
            backgroundColor: "#111",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default AddProject;
