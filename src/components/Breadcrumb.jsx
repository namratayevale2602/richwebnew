import { Link } from "react-router-dom";

const Breadcrumb = ({ page, subpage = "", subsec = "" }) => {
  return (
    <div className="bg-sky-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full breadcrumbs text-sm">
        <ul className="flex items-center space-x-2 py-4">
          <li className="flex items-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600">{page}</span>
            {(subpage.details ||
              subpage.industry ||
              subpage.blog ||
              subsec) && <span className="mx-2 text-gray-400">/</span>}
          </li>

          {subpage.details && (
            <li className="flex items-center capitalize">
              <span className="text-gray-600">{subpage.details}</span>
              {(subpage.industry || subsec) && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
          )}

          {subpage.industry && (
            <li className="flex items-center capitalize">
              <span className="text-gray-600">{subpage.industry}</span>
              {subsec && <span className="mx-2 text-gray-400">/</span>}
            </li>
          )}

          {subpage.blog && (
            <li className="flex items-center capitalize">
              <span className="text-gray-600">{subpage.blog}</span>
              {subsec && <span className="mx-2 text-gray-400">/</span>}
            </li>
          )}

          {subsec && <li className="capitalize text-gray-600">{subsec}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
