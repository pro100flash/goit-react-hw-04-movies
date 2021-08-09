import s from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ onClick, ...allyProps }) {
  return (
    <button type="submit" className={s.Button} onClick={onClick} {...allyProps}>
      <span>Load More</span>
    </button>
  );
}

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  "aria-label": PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
