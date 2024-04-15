function DataParagraph({ dataType, value }) {
  return (
    <p className="text-sm font-semibold capitalize text-neutral-gray-1">
      {dataType}:
      <span className="ml-1 font-normal text-neutral-gray-2">
        {value || "--"}
      </span>
    </p>
  );
}

export default DataParagraph;
