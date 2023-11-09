import React from "react";
import Athlete from "../components/Athlete";
import { useLoaderData, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";
import { createAction } from "../actions";

const Index = () => {
  const athletes = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCreateAthlete = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      // Assuming createAction returns the ID of the newly created athlete
      const newAthleteId = await createAction({
        request: { formData: () => formData },
        params: {},
      });

      if (newAthleteId) {
        // Redirect to the new athlete's page
        navigate(`/athletes/${newAthleteId}`);
      } else {
        // Handle case when ID is not returned
        console.error("Athlete created, but no ID returned from the server.");
      }
    } catch (error) {
      // Handle the error state, e.g., show an error message
      console.error("Failed to create athlete:", error);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Athlete List</h2>
        {athletes.map((athlete) => (
          <Athlete key={athlete.id} athlete={athlete} />
        ))}
      </div>

      {isAuthenticated() ? (
        <div style={{ textAlign: "center" }}>
          <button onClick={handleLogout}>Logout</button>
          <h2>Create an Athlete</h2>
          <form onSubmit={handleCreateAthlete}>
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="number"
              name="jersey_number"
              placeholder="Jersey Number"
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              required
            />
            <input type="text" name="salary" placeholder="Salary" required />
            <input
              type="number"
              name="years_left_on_contract"
              placeholder="Years Left on Contract"
              required
            />
            <button type="submit">Create New Athlete</button>
          </form>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Please Log In to Manage Athletes</h2>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      )}
    </>
  );
};

export default Index;
