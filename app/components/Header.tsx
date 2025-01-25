import Link from "next/link";
import Image from "next/image";

export default function Header() {
   return (
      <header className="bg-purple-800 text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                  <Image
                     src="/placeholder.svg?height=48&width=48"
                     alt="Logo"
                     width={48}
                     height={48}
                  />
               </div>
               <h1 className="text-2xl font-bold">ESOTERISMO - ANFER</h1>
            </div>
            <nav>
               <ul className="flex space-x-4">
                  <li>
                     <Link href="#servicios" className="hover:text-purple-200">
                        Servicios
                     </Link>
                  </li>
                  <li>
                     <Link href="#contacto" className="hover:text-purple-200">
                        Contacto
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
}
