import * as React from 'react';
import { List } from 'antd';

const Lista = ({ data }) => (
  <List
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
  />
)

export default Lista