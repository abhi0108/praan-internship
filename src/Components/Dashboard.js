import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BarChartIcon from '@material-ui/icons/BarChart';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import CompareIcon from '@material-ui/icons/Compare';
import { Title } from 'react-admin';
import BarChart from "./BarChart";
export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        
        <CardContent><h1>Welcome To The Admin Pannel</h1><br/>
        <h3>Consist of   <DataUsageIcon size={30}/>   Data,<BarChartIcon size={30} />Charts and   <CompareIcon size={30}/>analysis</h3>
        </CardContent>
        
    </Card>
);