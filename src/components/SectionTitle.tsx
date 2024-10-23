export default function SectionTitle({
  title,
  sectionNumber,
}: {
  title: string;
  sectionNumber: string;
}) {
  return (
    <h1 className="gap-300 flex justify-center text-sm uppercase md:justify-start">
      <span className="text-white/25">{sectionNumber}</span>
      <span>{title}</span>
    </h1>
  );
}
