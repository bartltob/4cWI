type Props = {
  name: string;
  job: string;
  gender: "m" | "f";
};
export default function Card({ name, job, gender }: Props) {
  return (
    <div className="justify-center items-center text-center border-2">
      {gender === "m" ? (
        <img src="/images/man.jpg" alt="male" />
      ) : (
        <img src="/images/woman.jpg" alt="female" />
      )}
      <p className="font-bold">{name}</p>
      <p>{job}</p>
    </div>
  );
}
