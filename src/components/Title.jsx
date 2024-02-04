import styles from "../style";

const Title = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] md:text-[60px] lg:text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Andre Hall-Rodrigues <br className="sm:block hidden" />{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] md:text-[60px] lg:text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full text-gradient">
          Web Developer
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Expert in digital design with Adobe Suite and AI, along with modern front-end technologies like Tailwind, React, and jQuery.
        </p>
      </div>

      

    
    </section>
  );
};

export default Title;
