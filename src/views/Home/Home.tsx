import Bento from "../../components/Bento/Bento";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <>
      <section
        className={`${styles.home} flex flex-wrap h-screen justify-center items-center `}
      >
        <div className=" w-full md:max-w-[1400px] mx-auto px-20 py-4 ">
          <div className=" flex flex-wrap justify-between">
            <a className=" text-center text-3xl font-black text-orange-500 cursor-pointer">
              Bento.com
            </a>
            <a className="text-center text-xl font-bold text-orange-500 rounded-3xl inline-flex  border outline py-0 px-4 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500 cursor-pointer">
              Login
            </a>
          </div>
        </div>
        <Bento />
      </section>

      <Footer />
    </>
  );
};
