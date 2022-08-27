const FormCheck = ({ name }) => {
  return (
    <form className="form-check">
      <input
        className="form-check__input"
        type="checkbox"
        name="check"
        id={name}
      />
      <label className="form-check__label" htmlFor={name}>
        {name}
      </label>
    </form>
  );
};

export default FormCheck;
