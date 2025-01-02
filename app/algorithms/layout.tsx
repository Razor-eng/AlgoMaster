export default function AlgorithmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background md:px-8">
      {children}
    </div>
  );
}