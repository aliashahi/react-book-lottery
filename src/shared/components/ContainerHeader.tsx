import PropTypes from "prop-types";

export function ContainerHeader({ Label }: { Label: string }) {
  return (
    <>
      <h1 className="p-2 px-4">{Label}</h1>
      <hr className="text-gray-200 m-2 bg-gray-100" />
    </>
  );
}

ContainerHeader.propTypes = {
  Label: PropTypes.string.isRequired,
};
