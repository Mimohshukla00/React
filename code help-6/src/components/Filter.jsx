// import React from 'react'

function Filter(prop) {
  // console.log(prop);

  const filterData = prop.filterData;
  // console.log(prop);
  // console.log(filterData);
  return filterData.map((data) => <button key={data.id}>{data.title}</button>);
}

export default Filter;
