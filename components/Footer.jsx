import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer class="flex flex-col justify-center  bg-zinc-800 text-white">
      <div className="max-w-[1100px] mx-auto">
        <div class="border-b border-gray-300 py-5">
          <div class="container flex items-center justify-between relative">
            <a href="./">
              <h2>Next News</h2>
            </a>
          </div>
        </div>
        <div class="border-b border-gray-300 py-5">
          <div class="container flex text-cnn_grey">
            <div class="text-sm flex-none w-[30%] pr-5">
              Menyajikan berita terhangat langsung melalui handphone Anda{" "}
              <a class="block mt-2">DOWNLOAD SEKARANG</a>
            </div>
            <div class="flex-none w-[45%]">
              <div class="text-white mb-4">TELUSURI</div>
              <ul class="columns-4">
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Nasional
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Internasional
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Ekonomi
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Olahraga
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Teknologi
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Otomotif
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Hiburan
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/" class="text-sm">
                    Gaya Hidup
                  </a>
                </li>

                <li class="mb-3">
                  <a href="/" class="text-sm">
                    berbuatbaik.id
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-none w-[25%]">
              <div class="text-white mb-4">IKUTI KAMI</div>
              <div class="flex items-center gap-2">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center text-cnn_grey text-[13px] py-5 [&amp;>a:hover]:text-white">
          © 2023 Agus Pranyoto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
