import { redirect } from "react-router-dom";

const API_URL = "https://p4teamproj.onrender.com/athletes/";

// Helper function to get the auth header
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  return { Authorization: `Token ${token}` };
};



//CREATE new athlete
export const createAction = async ({ request, params }) => {
  const formData = await request.formData();
  const athleteData = {
    name: formData.get("name"),
    jersey_number: formData.get("jersey_number"),
    position: formData.get("position"),
    salary: formData.get("salary"),
    years_left_on_contract: formData.get("years_left_on_contract"),
  };
  
  const response = await fetch(API_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(athleteData),
  });

 
  if (response.ok) {
    const data = await response.json();
    return data.id; 
  } else {
    throw new Error("Failed to create athlete");
  }
};

// UPDATE athlete
export const updateAction = async ({ request, params }) => {
  const id = params.id;
  const formData = await request.formData();
  const athleteData = {
    name: formData.get("name"),
    jersey_number: formData.get("jersey_number"),
    position: formData.get("position"),
    salary: formData.get("salary"),
    years_left_on_contract: formData.get("years_left_on_contract"),
  };

  const response = await fetch(`${API_URL}${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(athleteData),
  });
  if (response.ok) return redirect("/");
};

// DELETE athlete
export const deleteAction = async ({ params }) => {
  const id = params.id;
  const response = await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
  if (response.ok) return redirect("/");
};
