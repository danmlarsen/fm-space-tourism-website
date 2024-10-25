export default function SectionTitle({
  title,
  sectionNumber,
}: {
  title: string;
  sectionNumber: string;
}) {
  return (
    <h1 className="gap-300 font-condensed flex justify-center text-sm uppercase md:justify-start lg:text-lg">
      <span className="text-white/25">{sectionNumber}</span>
      <span>{title}</span>
    </h1>
  );
}
