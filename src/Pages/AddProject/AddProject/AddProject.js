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
      fetch("https://portfolio-project-server.onrender.com/projects", {
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
    <div style={{ marginTop: "10vh", marginBottom: "8vh" }}>
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
            placeholder="Screenshot 01"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot1")}
          />
          <br />
          <input
            type="text"
            placeholder="Screenshot 02"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot2")}
          />
          <br />
          <input
            type="text"
            placeholder="Screenshot 03"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot3")}
          />
          <br />
          <input
            type="text"
            placeholder="Screenshot 04"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot4")}
          />
          <br />
          <input
            type="text"
            placeholder="Screenshot 05"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot5")}
          />
          <br />
          <input
            type="text"
            placeholder="Screenshot 06"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("screenshot6")}
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
          <input
            type="text"
            placeholder="Feature 01"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("feature1")}
          />
          <input
            type="text"
            placeholder="Feature 02"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("feature2")}
          />
          <input
            type="text"
            placeholder="Feature 03"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("feature3")}
          />
          <input
            type="text"
            placeholder="Feature 04"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("feature4")}
          />
          <input
            type="text"
            placeholder="Feature 05"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("feature5")}
          />
          <input
            type="text"
            placeholder="TECHNOLOGIES"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("technologies")}
          />
          <input
            type="text"
            placeholder="Live Website Link"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("website_link")}
          />
          <input
            type="text"
            placeholder="Client Side Code Link"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("client_code")}
          />
          <input
            type="text"
            placeholder="Server Side Code Link"
            required
            style={{
              width: "100%",
              height: "25px",
              marginBottom: "16px",
              padding: "15px",
            }}
            {...register("server_code")}
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
