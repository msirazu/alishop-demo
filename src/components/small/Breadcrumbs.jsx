import { use } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../auth/context/DataContext";

const Breadcrumbs = () => {
    const data = use(DataContext);
    const { Id } = useParams();
    const newId = Number(Id);
    const product = data.find(p => p);
    return (
        <div className="breadcrumbs text-sm">
  <ul>
    <li>
      <Link to='/'>
        <FaHome/>
        Home
      </Link>
    </li>
    <li>
      <Link>
        {Id}
      </Link>
    </li>
  </ul>
</div>
    );
};

export default Breadcrumbs;