import React from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  data: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
  totalPrice: number;
};

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  onAddToWishList,
  totalPrice,
}) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={data[index]} onAddToWishList={onAddToWishList} />
      </div>
    );
  };
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={data.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export { SearchResults };
