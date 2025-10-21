type Props = {
  title: string;
  text: string;
};
export default function Button({ title, text }: Props) {
  return (
    <button
      onClick={() => alert(text)}
      className="rounded-2xl bg-purple-700 p-5 text-white"
    >
      {title}
    </button>
  );
}
