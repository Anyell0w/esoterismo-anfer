import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <main className="flex-grow">
            <section className="py-12 bg-purple-50">
               <div className="container mx-auto text-center">
                  <h1 className="text-4xl font-bold mb-4">
                     Bienvenido a ESOTERISMO - ANFER
                  </h1>
                  <p className="text-xl">
                     Descubre el poder de los rituales esotéricos y la sabiduría
                     del tarot
                  </p>
               </div>
            </section>
            <Services />
            <Contact />
         </main>
         <Footer />
      </div>
   );
}
