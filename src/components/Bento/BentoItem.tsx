interface Props {
  title: string;
  content: string;
  className?: string;
  img: string;
}

/**
 * Renders a Bento Item component.
 *
 * @param props - The props for the Bento Item component.
 * @returns The rendered Bento Item component.
 */
export default function BentoItem({
  title,
  content,
  className,
  img,
}: Props): JSX.Element {
  return (
    <article
      className={`overflow-hidden col-span-5 relative rounded-3xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 group cursor-pointer ${className}`}
    >
      <div
        className="
      absolute z-10 top-0 bottom-0 left-0 w-full h-full
      bg-gradient-to-b from-transparent from-40% via-black/50 to-black/80
      hover:shadow-2xl shadow-inner shadow-white/50
      "
      ></div>
      <div
        className="
        absolute top-0 bottom-0 left-0 group-hover:scale-110 bg-cover bg-center bg-repeat w-full
        transition-scale duration-1000 ease-in-out opacity-80 group-hover:opacity-100 bg-blend-luminosity
        h-full bg-orange-500 -z-10"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="relative select-none flex flex-col gap-1 p-6 z-20 justify-end h-full">
        <h1 className="text-white font-bold text-4xl">{title}</h1>
        <p>{content}</p>
      </div>
    </article>
  );
}
