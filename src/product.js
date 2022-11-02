const Product = props => {
  const { id, imgURL, name, description, price } = props;

  return (
    <div key={id} className={"product"}>
      <img
        src={imgURL}
        alt={`Picture of ${name}`}
        className={"image-product"}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <div>
        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-image={imgURL}
          data-item-name={name}
          data-item-url="/"
          data-item-price={price}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
