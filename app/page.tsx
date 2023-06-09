import Footer from "@/components/Footer";
import ProductImg from "@/components/ProductImg";
import Header from "@/components/header";

export default function Home() {

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <ProductImg />
      </main>
      <Footer />
    </div>
  )
}
