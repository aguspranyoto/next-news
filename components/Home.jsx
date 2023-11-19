import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Terpopuler } from ".";

const articles = [
  {
    id: 1,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 2,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 3,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 4,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 5,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 6,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 7,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 8,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 9,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 10,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
  {
    id: 11,
    image: "/presiden.jpeg",
    title:
      "Hasil Japan Masters: Gregoria Mariska Juara Usai Hajar Juara Olimpiade",
    category: "Olahraga",
  },
];

function Home() {
  return (
    <div className="">
      <div className="max-w-[1100px] mx-auto ">
        <div className="container mb-6">
          <div className="flex gap-6 py-4">
            <div className="flex flex-grow border border-gray-300 p-4 gap-4">
              <div className="">
                <h3 className="text-2xl font-bold mb-2">
                  Miss Nicaragua Sheynnis Palacios Juara Miss Universe 2023
                </h3>
                <p className="text-xs text-red-600 font-medium mb-2">
                  Gaya Hidup
                </p>
                <p className="text-sm ">
                  Sheynnis membuat kagum para juri Miss Universe 2023 saat
                  menjawab pertanyaan tentang siapa yang akan dia pilih untuk
                  menghabiskan hari dalam hidupnya.
                </p>
              </div>
              <div className="flex-none w-[498px] overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={"/presiden.jpeg"}
                    width={600}
                    height={600}
                    className="object-cover w-full hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none w-[280px] border-b border-gray-300">
              <div>
                <h1 className="font-bold text-md">TERPOPULER</h1>
                <div className="mb-3 border-2 border-red-700 w-[26px] mt-2"></div>
              </div>
              <div className="overflow-y-auto relative h-[240px] my-4">
                {articles.map((item, i) => (
                  <article key={item.id}>
                    <div className="flex mb-3">
                      <div className="w-2/6">
                        <h1 className="text-xl text-gray-300">
                          {String(item.id).padStart(2, "0")}
                        </h1>
                      </div>
                      <div className="">
                        <p className="font-medium text-md mb-1">{item.title}</p>
                        <p className="text-xs text-red-600 font-medium">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-6">
          <div>
            <h1 className="font-bold text-md">BERITA UTAMA</h1>
            <div className="mb-3 border-2 border-red-700 w-[26px] my-2"></div>
            <div className="grid grid-cols-6 gap-4">
              {articles.map((item, i) => {
                if (i < 6) {
                  return (
                    <article key={item.id}>
                      <a href="/" className="mb-3">
                        <Image
                          src={item.image}
                          width={300}
                          height={300}
                          alt=""
                          className="mb-2 "
                        />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </a>
                    </article>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="container mb-6">
          <div className="flex w-full gap-6">
            <div className="w-4/6  ">
              <div className="bg-red-600 p-3 mb-6">
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-bold text-md text-white">
                      FREE PALESTINE
                    </h1>
                    <div className="mb-3 border-2 border-white w-[26px] my-2"></div>
                  </div>
                  <a href="/" className="text-white font-bold text-sm">
                    LIHAT SEMUA
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {articles.map((item, i) => {
                    if (i < 3) {
                      return (
                        <article key={item.id}>
                          <a href="/" className="mb-3">
                            <img src={item.image} alt="" className="mb-2 " />
                            <span className="text-xs text-white font-medium mb-2">
                              {item.title}
                            </span>
                            <p className="text-xs text-yellow-500 mb-2">
                              International
                            </p>
                          </a>
                        </article>
                      );
                    }
                  })}
                </div>
              </div>
              <div>
                <h1 className="font-bold text-md">TERBARU</h1>
                <div className="mb-3 border-2 border-red-700 w-[26px] my-2"></div>
                <div className="">
                  <h1 className="font-medium text-md">TERPOPULER</h1>
                  <div className="mb-3 border-2 border-red-700 w-[10%] mt-2"></div>
                  <div className="">
                    {articles.map(
                      (item, i) =>
                        i < 9 && (
                          <article className="flex gap-3 relative mb-6 items-center">
                            <div className="overflow-hidden">
                              <a href="/" className="w-[270px]">
                                <Image
                                  width={600}
                                  height={600}
                                  className="object-cover overflow-hidden w-full hover:scale-110"
                                  src={item.image}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="flex flex-col">
                              <span>
                                <h2 className="text-xl font-medium mb-3">
                                  {item.title}
                                </h2>
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
              </div>
            </div>

            <div className="w-2/6 px-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="font-bold text-md text-black">FOCUS</h1>
                  <div className="mb-3 border-2 border-red-600 w-[26px] my-2"></div>
                </div>
                <a href="/" className="text-red-600 font-bold text-sm">
                  <ArrowForwardIosIcon />
                </a>
              </div>
              {articles.map((item, i) => {
                if (i < 3) {
                  return (
                    <article className="mb-4">
                      <a class="flex group gap-4 flex-col relative" href="/">
                        <span class="flex-none overflow-hidden w-full">
                          <span class=" aspect-w-16 aspect-h-7">
                            <Image
                              class="object-cover w-full group-hover:scale-110"
                              src={item.image}
                              alt="image fokus"
                              width={300}
                              height={300}
                            />
                          </span>
                        </span>
                        <span class="flex-grow absolute bg-red-600 bottom-0 left-4 right-4 p-2">
                          <h2 class="text-sm text-center font-medium text-white">
                            {item.title}
                          </h2>
                        </span>
                      </a>
                    </article>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
