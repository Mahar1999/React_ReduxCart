import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "The First",
    description: "First ever wrote",
  },
  {
    id: "p2",
    price: 7,
    title: "The Second",
    description: "Second ever wrote",
  },
  {
    id: "p3",
    price: 8,
    title: "The third",
    description: "third ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              id={product.id}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
