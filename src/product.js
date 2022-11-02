const Product = props => {
  const { id, imageUrl, name, description, price } = props;

  return (
    <div key={id} className={"product"}>
      <img
        src={imageUrl}
        alt={`Image of ${name}`}
        className={"image-product"}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default Product;
