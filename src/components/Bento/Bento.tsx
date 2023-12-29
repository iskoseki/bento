import BentoItem from "./BentoItem";

export default function Bento() {
  const Items = [
    {
      title: "New drops",
      content: "Find the latest drops from the world's top artists.",
      img: `https://images.unsplash.com/photo-1538329972958-465d6d2144ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8`,
      className: "col-span-10  md:col-span-4",
    },
    {
      title: "Exclusive content",
      content: "Exclusive pieces for our fans and collectors.",
      img: `https://images.unsplash.com/photo-1496115898806-2b023a9dcb6b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      className: "col-span-10 md:col-span-6",
    },
    {
      title: "Gallery",
      content: "Explore the world of art with us.",
      img: `https://plus.unsplash.com/premium_photo-1666184129815-fd5ed038142e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1a3JpS2E0dnVITXx8ZW58MHx8fHx8`,
      className: "col-span-10 md:col-span-6",
    },
    {
      title: "On sale",
      content: "content",
      img: `https://images.unsplash.com/photo-1536640387894-cbc452a79a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D`,
      className: "col-span-10  md:col-span-4",
    },
  ];

  return (
    <section
      className={`
        w-full max-w-[1400px] grid grid-cols-10 auto-rows-[20rem] gap-4 mx-auto px-20 
        `}
    >
      {Items.map((item) => (
        <BentoItem key={item.title} {...item} />
      ))}
    </section>
  );
}
