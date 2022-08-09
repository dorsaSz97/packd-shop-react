import React from 'react';

import SELECTIONS from '../../data/selections';

const SelectionBox = ({ kind, selected, changeValueHandler }) => {
  const [selectionBoxObj] = SELECTIONS.filter(
    selection => selection.kind === kind
  );

  return (
    <select
      name={kind}
      id={`${kind}Selection`}
      defaultValue={selected || selectionBoxObj.defaultValue}
      className="appearance-none py-2 px-3 border-dark border-2 text-center"
      onChange={changeValueHandler}
    >
      {selectionBoxObj.options.map((option, index) => {
        return (
          <option key={index} value={selectionBoxObj.values[index]}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectionBox;
