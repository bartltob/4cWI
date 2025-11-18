type Props = {
  noun: string;
  verb: string;
};

export default function ToDo({ noun, verb }: Props) {
  return (
    <div className="grid grid-cols-2 w-full items-center py-3 px-4 hover:bg-violet-100 rounded-md transition-colors">
      <p className="font-bold text-lg">{verb + " " + noun}</p>
      <input
        type="checkbox"
        className="h-5 w-5 justify-self-end cursor-pointer"
      />
    </div>
  );
}
