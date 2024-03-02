// import React from 'react'

function Filter(prop) {
  let filterData = prop.filterData;
  // console.log(filterData);
  return filterData.map((data) => {
    console.log(data.title);
  });
}

export default Filter;
