import styles from "./style";
import { Billing, Business, Business2, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-black-gradient mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div className={`lg:flex lg:justify-between lg:gap-4`}>
      <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24`}>
        <Hero />
      </div>
      <div className={'pt-24 lg:w-1/2 lg:py-24'}>
      <Business2 />
        <Business />
        
        
      </div>
      
    </div> 
    <Footer />  
  </div>
);

export default App;
