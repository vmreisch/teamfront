import { Link } from "react-router-dom";

const Athlete = ({ athlete }) => {
  const divStyle = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  const salary = parseFloat(athlete.salary);

  return (
    <div style={divStyle}>
      <Link to={`/athletes/${athlete.id}`}>
        <h1>{athlete.name}</h1>
      </Link>
      <h2>Jersey Number: {athlete.jersey_number}</h2>
      <h2>Position: {athlete.position}</h2>
      <h2>Salary: ${!isNaN(salary) ? salary.toFixed(2) : "Not Available"}</h2>
      <h2>Years Left on Contract: {athlete.years_left_on_contract}</h2>
    </div>
  );
};

export default Athlete;
