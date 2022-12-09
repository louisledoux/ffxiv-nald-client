import React from 'react';

type ListParams = {
  params: {
    id: string,
  },
}
function ListPage({ params }: ListParams) {
  return (
    <div>{params.id}</div>
  );
}

export default ListPage;
