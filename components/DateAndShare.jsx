import Image from "next/image";
function DateAndShare() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-yellow-500">Next News</span>
      <span className="text-sm text-gray-300">Sabtu, 8 Nov 2023 03:50 WIB</span>
      <div className="flex items-center gap-2">
        <span className="text-xs">Bagikan:</span>
        <Image
          src="/facebook.png"
          className="w-6 h-6"
          width={200}
          height={200}
          alt="facebook"
        />
        <Image
          src="/twitter.png"
          className="w-6 h-6"
          width={200}
          height={200}
          alt="twitter"
        />
      </div>
    </div>
  );
}

export default DateAndShare;
