import React from 'react';
import { Affix, Button, Calendar  } from '@alifd/next';
import './styles.scss';
import moment from 'moment';

moment.locale('zh-cn');

const MyComponent = () => (
  <div>
    <Calendar  defaultValue={moment().add(1, 'days')} />
  </div>

);
export default MyComponent;