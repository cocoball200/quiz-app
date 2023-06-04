export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <main className="mx-5">{children}</main>
    </div>
  );
}