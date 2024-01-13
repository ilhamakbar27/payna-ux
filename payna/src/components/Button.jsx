import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <>
      <a href="#products">
        <button className="bg-transparent border text-xl border-black  max-md:hidden font-semibold hover:text-white hover:3s hover:ease-in-out hover:scale-110 hover:transition-all   hover:bg-black  tracking-wider rounded-xl text-black px-8 py-2 ">
          {title}
        </button>
      </a>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
