import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {props.pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 text-lg">
          <li>
            <Link
              to="/admin"
              className="text-black hover:text-gold-600 dark:text-white dark:hover:text-gold-600"
            >
              Dashboard /
            </Link>
          </li>
          <li className="text-gold-600 font-bold">{props.pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
