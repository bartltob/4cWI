import Liste from "./components/first_components/Liste.tsx";
import Button from "./components/first_components/Button.tsx";
import Card from "./components/first_components/Card.tsx";

export default function First_components() {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 gap-2 w-60 p-4">
        <Liste title="coffee" />
        <Liste title="tea" />
        <Liste title="water" />
        <Liste title="beer" />
      </div>
      <div className=" p-4">
        <Button title="Klick mich" text="Alert!" />
      </div>
      <div className="grid grid-cols-2 gap-2 w-100 p-4">
        <Card name="Luca Hagspiel" job="student" gender="m" />
        <Card name="Laura" job="teacher" gender="f" />
      </div>
    </div>
  );
}
