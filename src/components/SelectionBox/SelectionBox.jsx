import React from 'react';
import SELECTIONS from '../../data/selections';

const SelectionBox = ({ changeValueHandler, kind, selected }) => {
  const [selectionBoxObj] = SELECTIONS.filter(
    selection => selection.kind === kind
  );

  return (
    <div>
      <select
        className="appearance-none py-2 px-3 border-black border-2 text-center"
        name={kind}
        id={`${kind}Selection`}
        defaultValue={selected || selectionBoxObj.defaultValue}
        onChange={changeValueHandler}
      >
        {selectionBoxObj.options.map((op, index) => {
          return (
            <option key={index} value={selectionBoxObj.values[index]}>
              {op}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectionBox;
