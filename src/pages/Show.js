import { Link, useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const athlete = useLoaderData();

  const divStyle = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={divStyle}>
      <h1>{athlete.name}</h1>
      <h2>Jersey Number: {athlete.jersey_number}</h2>
      <h2>Position: {athlete.position}</h2>
      <h2>Salary: {athlete.salary}</h2>
      <h2>Years Left on Contract: {athlete.years_left_on_contract}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Athlete Details</h2>
        <Form action={`/update/${athlete.id}`} method="post">
          <input type="text" name="name" defaultValue={athlete.name} />
          <input
            type="number"
            name="jersey_number"
            defaultValue={athlete.jersey_number}
          />
          <input type="text" name="position" defaultValue={athlete.position} />
          <input type="text" name="salary" defaultValue={athlete.salary} />
          <input
            type="number"
            name="years_left_on_contract"
            defaultValue={athlete.years_left_on_contract}
          />
          <button type="submit">Update Athlete</button>
        </Form>
        <Form action={`/delete/${athlete.id}`} method="post">
          <button type="submit">Delete Athlete</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
