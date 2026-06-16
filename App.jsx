import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FarmToBottle from './components/FarmToBottle';
import ProductShowcase from './components/ProductShowcase';
import NutritionFacts from './components/NutritionFacts';
import CustomerReviews from './components/CustomerReviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream-50 text-bronze-900 min-h-screen">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Aamrit */}
      <WhyChooseUs />

      {/* Farm to Bottle Journey */}
      <FarmToBottle />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Nutrition Facts */}
      <NutritionFacts />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
