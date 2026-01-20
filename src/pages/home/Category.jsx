import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name } = category;
  return (
    <Link to='/'>
      <div className="border border-gray-200 py-2 px-5 rounded-lg hover:border hover:border-secondary">
        <h5 className="capitalize">{name}</h5>
      </div>
    </Link>
  );
};

export default Category;