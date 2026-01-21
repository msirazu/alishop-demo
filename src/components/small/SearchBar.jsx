const SearchBar = () => {
    return (
        <div className="w-full">
      <div className="relative w-full">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </g>
        </svg>

        <input
          type="search"
          placeholder="Search"
          className="input input-bordered w-full pl-10"
        />
      </div>
    </div>
    );
};

export default SearchBar;