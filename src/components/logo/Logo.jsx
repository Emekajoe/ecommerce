const Logo = ({ hasNoStyle }) => {
  return (
    <div className="logo">
      <span className={hasNoStyle ? "logo logo--no-style" : "logo-box"}>
        Fojj
      </span>
    </div>
  );
};

export default Logo;
