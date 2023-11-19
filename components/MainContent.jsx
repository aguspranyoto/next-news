import { Breadcrumbs, DateAndShare } from ".";
import Image from "next/image";
import Presiden from "../public/presiden.jpeg";

function MainContent() {
  return (
    <div className="container p-4">
      <div className="mb-4">
        <Breadcrumbs />
      </div>
      <div className="text-2xl font-medium mb-2">
        <h1>
          ANRI Ambil Surat Bung Karno dari Ratna Sari Dewi, Ada Fakta Baru G30S
        </h1>
      </div>
      <div className="mb-4">
        <DateAndShare />
      </div>
      <div className="">
        <Image
          className="object-contain w-full"
          src={Presiden}
          width={600}
          height={300}
        />
        <p className="text-xs text-gray-500 py-2 mb-2">
          Presiden pertama RI yang juga tokoh proklamator Indonesia, Sukarno
          atau Bung Karno. (AP/Leslie Priest)
        </p>

        <div>
          <p className="text-black text-sm">
            <b>Jakarta, CNN Indonesia</b> -- Arsip Nasional Republik Indonesia (
            <span className="text-red-500 font-bold">ANRI</span>) mengumpulkan
            lebih dari 300 arsip salah satunya sejumlah surat Presiden pertama
            RI Sukarno atau Bung Karno kepada istrinya Ratna Sari Dewi di Tokyo,
            Jepang. Dari lebih 300 arsip surat
            <span className="text-red-500 font-bold"> Bung Karno</span> ke Ratna
            Sari Dewi itu ada yang berisi fakta baru soal G30S/PKI.
            <br />
            <br />
            "(Arsip) sudah di Indonesia, tapi aslinya masih di sana (Jepang).
            Nanti pelan-pelan kami akan bawa juga aslinya," kata Kepala ANRI
            Imam Gunarto di sela Agenda Sistem Pemerintahan Berbasis Elektronik
            Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi
            (Kemenpan RB) di Denpasar, Bali, Jumat (17/11) seperti dikutip dari
            <span className="italic"> Antara</span>.
            <br />
            <br />
            Saat ini, kata dia, pihaknya sedang menyusun sebagian arsip yang
            sudah dibawa ke Indonesia dari kediaman Ratna Sari Dewi di Tokyo
            pada pekan lalu
            <br />
            <br />
            Menurut dia, arsip tersebut tergolong baru dibuka yang selama ini
            disimpan rapi oleh istri keenam Sang Proklamator RI Soekarno.
            <br />
            <br />
            ANRI, lanjut dia, sudah berkoordinasi dengan Kedutaan Besar Republik
            Indonesia (KBRI) di Tokyo, Jepang untuk memantau dan melanjutkan
            arsip bersejarah itu.
            <br />
            <br />
            "Selama ini kan disimpan terus oleh Ibu Dewi, belum dibuka (publik)
            dan itu ada 300 lebih arsip di sana (kediaman Ratna Sari Dewi di
            Tokyo)," katanya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
