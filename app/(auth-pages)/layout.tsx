export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Full screen, centered */}
      <div className="max-w-7xl flex flex-col gap-12 items-center">
        {children}
      </div>
    </div>
  );
}
