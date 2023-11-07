import { redirect } from "react-router-dom";

const URL = "https://p4teamproj.onrender.com";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newAthlete = {
    name: formData.get("name"),
    jersey_number: formData.get("jersey_number"),
    position: formData.get("position"),
    salary: formData.get("salary"),
    years_left_on_contract: formData.get("years_left_on_contract"),
  };

  await fetch(`${URL}/athletes/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAthlete),
  });

  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const id = params.id;

  const updatedAthlete = {
    name: formData.get("name"),
    jersey_number: formData.get("jersey_number"),
    position: formData.get("position"),
    salary: formData.get("salary"),
    years_left_on_contract: formData.get("years_left_on_contract"),
  };

  await fetch(`${URL}/athletes/${id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedAthlete),
  });

  return redirect(`/athletes/${id}`);
};

export const deleteAction = async ({ params }) => {
  const id = params.id;

  await fetch(`${URL}/athletes/${id}/`, {
    method: "delete",
  });

  return redirect("/");
};
