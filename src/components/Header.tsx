import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return <header className='header theme header-in-main'>
    <div className="border">
      <div className='flex justify-right items-center'>
        <Image src='/logo.png' width={40} height={40} alt="logo" />
      </div>
    </div>

  </header>
}