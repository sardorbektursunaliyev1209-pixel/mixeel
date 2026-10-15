import CardSkeleton from "../../Componets/CardSelekton/CardSelekton";
import ProductCard from "../../Componets/ProductCard/ProductCard";

function Cart({
  cart,
  wishlist,
  toggleWishlist,
  addToCart,
  loading,
  toggleCompare,
}) {
  return (
    <div className="container_1200 py-6">
      <h1 className="text-2xl dark:text-white">Корзина</h1>
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
          cart.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
              cart={cart}
              toggleCompare={toggleCompare}
            />
          ))
        )}
      </div>{" "}
    </div>
  );
}

export default Cart;
