type Props = {
  src: string;
  onClick?: () => void;
};

export function ConfCardButton({ src, onClick }: Props) {
  return (
    <button onClick={onClick} className="p-0 border-none bg-transparent">
      <img src={src} alt={"Button"} className="cursor-pointer" />
    </button>
  );
}
