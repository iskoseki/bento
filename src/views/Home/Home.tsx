import Bento from "../../components/Bento/Bento";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <section
        className={`${styles.home} flex flex-wrap h-screen justify-center items-center `}
      >
        <div className=" w-full md:max-w-[1400px] mx-auto px-10 md:px-20 py-4 ">
          <div className=" flex flex-wrap justify-between">
            <a
              href="/"
              className=" text-center text-2xl md:text-3xl font-black text-orange-500 cursor-pointer"
            >
              Bento.com
            </a>
            <a
              href="/login"
              className="md:text-center text-md md:text-xl text font-bold text-orange-500 rounded-3xl inline  border outline px-4 py-0 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500 cursor-pointer items-center justify-center"
            >
              Login
            </a>
          </div>
        </div>
        <Bento />
      </section>

      <Footer />
    </>
  );
}
