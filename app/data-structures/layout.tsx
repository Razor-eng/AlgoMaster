export default function DataStructuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background sm:px-8">
      {children}
    </div>
  );
}