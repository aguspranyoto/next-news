import Link from "next/link";
import Image from "next/image";

const terpopulerPost = [
  {
    image: "/presiden.jpeg",
    title:
      "Presiden pertama RI yang juga tokoh proklamator Indonesia, Sukarno atau Bung Karno",
    category: "Nasional",
    date: "• 1 Jam yang lalu",
  },
  {
    image: "/john-kei.jpeg",
    title: "Polisi Ungkap Pengakuan John Kei soal Penembakan Kelompok Nus Kei",
    category: "Nasional",
    date: "• 2 Jam yang lalu",
  },
  {
    image: "/john-kei.jpeg",
    title: "Polisi Ungkap Pengakuan John Kei soal Penembakan Kelompok Nus Kei",
    category: "Nasional",
    date: "• 2 Jam yang lalu",
  },
  {
    image: "/john-kei.jpeg",
    title: "Polisi Ungkap Pengakuan John Kei soal Penembakan Kelompok Nus Kei",
    category: "Nasional",
    date: "• 2 Jam yang lalu",
  },
  {
    image: "/john-kei.jpeg",
    title: "Polisi Ungkap Pengakuan John Kei soal Penembakan Kelompok Nus Kei",
    category: "Nasional",
    date: "• 2 Jam yang lalu",
  },
];

function Terpopuler() {
  return (
    <div className="">
      <h1 className="font-medium text-md">TERPOPULER</h1>
      <div className="mb-3 border-2 border-red-700 w-[10%] mt-2"></div>
      <div className="">
        {terpopulerPost.map((item, i) =>
          i == 0 ? (
            <article className="flex flex-col gap-3 relative mb-5">
              <a href="/">
                <span>
                  <Image
                    width={600}
                    height={600}
                    className="aspect-w-16 aspect-h-9"
                    src={item.image}
                    alt=""
                  />
                </span>
              </a>
              <span>
                <h2 className="text-sm font-medium">{item.title}</h2>
              </span>
            </article>
          ) : (
            <article className="flex gap-3 relative mb-4">
              <div className="overflow-hidden">
                <a href="/">
                  <Image
                    width={600}
                    height={600}
                    className="object-cover overflow-hidden w-full h-full hover:scale-110"
                    src={item.image}
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col">
                <span>
                  <h2 className="text-sm font-medium mb-2">{item.title}</h2>
                </span>
                <span className="flex">
                  <span className="text-xs text-red-600 font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs ms-1 text-gray-400">
                    {item.date}
                  </span>
                </span>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}

export default Terpopuler;
