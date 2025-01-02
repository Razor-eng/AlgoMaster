"use client";

import { Language } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LanguageCardProps {
  language: Language;
}

export function LanguageCard({ language }: LanguageCardProps) {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg transition-all cursor-pointer" 
          onClick={() => router.push(`/learn/${language.id}`)}>
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12">
            <Image
              src={language.icon}
              alt={language.name}
              fill
              className="object-contain"
            />
          </div>
          <CardTitle>{language.name}</CardTitle>
        </div>
        <CardDescription>{language.description}</CardDescription>
        <Button className="w-full mt-4">Start Learning</Button>
      </CardHeader>
    </Card>
  );
}