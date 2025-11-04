type Props = {
  name: string;
  job: string;
  image: string;
};
export default function Card({ name, job, image }: Props) {
  return (
    <div className="text-center flex-col border-2 h-60 overflow-hidden">
      <img src={image} alt="Bild" className="h-2/3 w-full" />

      <p className="font-bold">{name}</p>
      <p className="overflow-auto">{job}</p>
    </div>
  );
}
