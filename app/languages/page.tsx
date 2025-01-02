import { languages } from "@/config/languages";
import { LanguageCard } from "@/components/language-card";

export default function LanguagesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {languages.map((language) => (
          <LanguageCard key={language.id} language={language} />
        ))}
      </div>
    </div>
  );
}