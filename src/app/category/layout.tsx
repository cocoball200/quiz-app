
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex justify-center items-center'>
      </div>
      <main>{children}</main>
    </div>
  );
}