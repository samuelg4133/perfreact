import React, { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist");
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

type ProductItemProps = {
  product: { id: number; price: number; title: string; priceFormatted: string };
  onAddToWishList: (id: number) => void;
};

const ProductItemC: React.FC<ProductItemProps> = ({
  product,
  onAddToWishList,
}) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
};

export const ProductItem = memo(ProductItemC, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
