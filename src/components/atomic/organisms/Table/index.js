import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const Table = ({rows, columns, pageSize, rowsPerPageOptions }) => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      rowsPerPageOptions={[rowsPerPageOptions]}
      checkboxSelection
    />
  </div>
);


export default Table