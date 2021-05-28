import React from 'react';
import './table.css';

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group
} from '@syncfusion/ej2-react-grids';
import data from './MOCK_DATA.json';


const TT = () => {
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        allowFiltering={true}
        allowGrouping={true}
      >
        <ColumnsDirective>
          <ColumnDirective field='id' headerText='ID' textAlign='Right' width='90' />
          <ColumnDirective field='timestamp' headerText='TIMESTAMP' width='90' />
          <ColumnDirective field='wind_direction' headerText='WIND_DIRECTION' width='90'/>
          <ColumnDirective field='wind_speed' headerText='WIND_SPEED' width='90' />
          <ColumnDirective field='p1'  width='90' />
          <ColumnDirective field='p2'  width='90' />
          <ColumnDirective field='p3'  width='90' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
    </div>
  );
}

export default TT;