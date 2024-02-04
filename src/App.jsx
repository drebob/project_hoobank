import { Billing, Experience, About, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Title } from "./components";

const App = () => (
  <div className="bg-black-gradient mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div className={`lg:flex lg:justify-between lg:gap-4`}>
      <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12`}>
        <Title />
      </div>
      <div className={'pt-24 lg:w-1/2 lg:py-12'}>
      <About />
        <Experience/>
        
        
      </div>
      
    </div> 
    <Footer />  
  </div>
);

export default App;
