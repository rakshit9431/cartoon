import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ item }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product-detail/${item.id}`)}
      // onClick={() => router.push("/product-detail/")}
      className="border rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 w-[200px] h-[330px] flex flex-col bg-white"
    >
      <div className="relative w-full h-[180px]">
        <Image
          src={item.image}
          alt={item.title || "Product Image"}
          fill
          className="object-contain p-4 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-5 px-4  flex-1">
        <h2 className="text-sm font-semibold text-center line-clamp-2">
          {item.title}
        </h2>
        <p className="text-center text-blue-600 font-medium ">$ {item.price}</p>
      </div>
    </div>
  );
};

export default Card;
