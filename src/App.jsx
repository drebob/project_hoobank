import { Experience, About, Title, SocialMedia, Nav} from "./components";

const App = () => (
  <div className="bg-black-gradient mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div className={`lg:flex lg:justify-between lg:gap-4`}>
      <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:justify-between lg:flex-col lg:py-24`}>
        <div>
        <Title />
        <Nav />
        </div>
        <div>
        <SocialMedia />
        </div>
      </div>
      <div className={'pt-24 lg:w-1/2 lg:py-24'}>
        < About />
        <Experience/>
      </div>
      
    </div> 
   
  </div>
);

export default App;
