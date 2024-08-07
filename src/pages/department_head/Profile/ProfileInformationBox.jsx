import PropTypes from "prop-types";

export default function ProfileInformationBox({ children }) {
  return (
    <div className="border border-black h-[60vh] w-[100vh]">
      <div className="font-bold text-2xl text-black flex justify-between items-start p-4">
        Profile Account
      </div>
      {children}
      <hr className="my-4 border border-black-1000" />
    </div>
  );
}

// Define PropTypes for the component
ProfileInformationBox.propTypes = {
  children: PropTypes.node, // `children` can be any node (string, element, etc.)
};
