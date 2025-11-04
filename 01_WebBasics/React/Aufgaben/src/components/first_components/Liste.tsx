type Props = {
  title: string;
};
export default function Liste({ title }: Props) {
  return (
    <div className="bg-teal-700 p-5 text-white hover:bg-teal-500 text-center">
      {title}
    </div>
  );
}
