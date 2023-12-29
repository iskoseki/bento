import Logo from "../assets/critikal.png";
export default function Footer() {
  return (
    <footer className="w-full max-w-[1400px] my-10 px-20  bg-white text-muted">
      <section className="flex justify-between  ">
        <img src={Logo} alt="" className=" w-32 h-auto" />
        <div className=" text-orange-500">
          <span>Copyright © 2023</span>
        </div>
      </section>
    </footer>
  );
}
