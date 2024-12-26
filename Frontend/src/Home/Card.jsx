import PropTypes from "prop-types";
function Card({ item }) {

  const { image, name, category, title, price } = item;

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-90 duration-200">
          <figure>
            <img src={image} alt={name || "Product"} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline px-4 py-5">${price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-4 py-5 duration-200">
                <button>
                  <a href="/"> Buy Now </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
