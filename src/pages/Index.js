import Athlete from "../components/Athlete";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Index = (props) => {
  const athletes = useLoaderData();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Create an Athlete</h2>
        <Form action="/create" method="post">
          <input type="text" name="name" placeholder="Name" />
          <input
            type="number"
            name="jersey_number"
            placeholder="Jersey Number"
          />
          <input type="text" name="position" placeholder="Position" />
          <input type="text" name="salary" placeholder="Salary" />
          <input
            type="number"
            name="years_left_on_contract"
            placeholder="Years Left on Contract"
          />
          <button>Create New Athlete</button>
        </Form>
      </div>
      {athletes.map((athlete) => (
        <Athlete athlete={athlete} key={athlete.id} />
      ))}
    </>
  );
};

export default Index;
