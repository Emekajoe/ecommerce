const FilterBtn = ({ icon: FiChevronDown, name, hasBackground, hasNoIcon }) => {
  return (
    <button
      className={
        hasBackground
          ? "filter__review"
          : "filter__review filter__review--no-bg"
      }
    >
      <span
        className={
          hasNoIcon
            ? "filter__review-text filter__review-text--small"
            : "filter__review-text"
        }
      >
        {name}
      </span>
      {hasNoIcon ? null : <FiChevronDown />}
    </button>
  );
};

export default FilterBtn;
