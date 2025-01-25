import { Instagram, InstagramIcon as TiktokIcon, Phone } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-purple-800 text-white py-6">
         <div className="container mx-auto text-center">
            <p className="mb-4">Síguenos en nuestras redes sociales</p>
            <div className="flex justify-center space-x-4">
               <a
                  href="https://www.instagram.com/maestros.anfer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-200"
               >
                  <Instagram size={24} />
               </a>
               <a
                  href="https://www.tiktok.com/@esoterismo_anfer1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-200"
               >
                  <TiktokIcon size={24} />
               </a>
               <a
                  href="https://wa.me/51925003048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-200"
               >
                  <Phone size={24} />
               </a>
            </div>
            <p className="mt-4">
               &copy; 2023 ESOTERISMO - ANFER. Todos los derechos reservados.
            </p>
         </div>
      </footer>
   );
}
