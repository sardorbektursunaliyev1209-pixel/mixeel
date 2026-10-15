import { FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Componets/ProductCard/ProductCard";
import CardSkeleton from "../../Componets/CardSelekton/CardSelekton";

function Wishlist({
  products,
  loading,
  toggleWishlist,
  wishlist,
  addToCart,
  toggleCompare,
}) {
  console.log("wishlist products:", products);
  return (
    <>
      <div className="Wishlist bg-white dark:bg-gray-900">
        <div className="container_1200">
          <div className="flex items-center gap-2 text-gray-400 py-[27px]">
            <div className="flex items-center gap-1">
              <a href="">Главная</a>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <a href="">Изброанное</a>
          </div>
          <h1 className="text-[20px] text-black dark:text-white">Избранное</h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5">
            {loading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              wishlist.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  toggleCompare={toggleCompare}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
