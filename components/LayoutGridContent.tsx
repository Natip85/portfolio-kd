export default function LayoutGridContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-white text-4xl">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
}
