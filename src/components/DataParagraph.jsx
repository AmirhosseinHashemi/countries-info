function DataParagraph({ dataType, value }) {
  return (
    <p className="text-sm font-semibold capitalize text-neutral-gray-1 dark:text-white">
      {dataType}:
      <span className="ml-1 font-normal normal-case text-neutral-gray-2">
        {value || "--"}
      </span>
    </p>
  );
}

export default DataParagraph;
