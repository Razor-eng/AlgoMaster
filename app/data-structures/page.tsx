import { dataStructures } from "@/config/data-structures";
import { StructureCard } from "@/components/data-structures/structure-card";

export default function DataStructuresPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-4xl font-bold mb-8">Data Structures</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataStructures.map((structure) => (
          <StructureCard key={structure.slug} structure={structure} />
        ))}
      </div>
    </div>
  );
}