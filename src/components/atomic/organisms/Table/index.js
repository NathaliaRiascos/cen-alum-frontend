import React from 'react';
import PropTypes from "prop-types"
import 'antd/dist/antd.css';
import { Table } from 'antd';

import './Table.css'



const Tabla = ({data, columns}) => (
  <Table
    className='tabla'
    rowKey={item => item.key}
    dataSource={data} 
    columns={columns}
  />
);

Tabla.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
}
export default Tabla