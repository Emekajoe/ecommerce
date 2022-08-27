import "./Button.scss";
const Button = ({ text, loadMore, isShorter }) => {
  return (
    <>
      <button
        className={
          loadMore
            ? `${
                isShorter
                  ? "btn btn--load-more btn--load-short"
                  : "btn btn--load-more"
              }`
            : "btn"
        }
      >
        {text}
      </button>
    </>
  );
};

export default Button;
