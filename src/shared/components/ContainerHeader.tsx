import PropTypes from "prop-types";

export function ContainerHeader({
  Label,
  content,
}: {
  Label: string | undefined;
  content?: any;
}) {
  return (
    <>
      <div className="w-full flex flex-nowrap justify-between items-center px-2">
        <h1 className="p-2 px-4 !mb-0 text-2xl">{Label}</h1>
        <div>{content}</div>
      </div>
      <hr className="text-gray-200 m-2 bg-gray-100" />
    </>
  );
}

ContainerHeader.propTypes = {
  Label: PropTypes.string.isRequired,
};
