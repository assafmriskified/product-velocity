import React from 'react';
import {ChartExtraConfig, LineChart} from '@riskified/charts-ui-react';
import styles from './InventoryCharts.module.css'
import {getInventoryChartsData} from '../utils';

export interface ChartsProps {
    productId: number,
    className?: string;
    loading: boolean;
    noData: 'none' | 'start' | 'middle' | 'start & middle';
    isEmpty: boolean;
    stacking?: boolean;
}

const buildChartConfig = (isStacked: boolean): ChartExtraConfig => ({
    tooltip: {
        summaryLine: {isEnabled: true, caption: 'Summary'},
        title: {isEnabled: true},
    },
    legend: {
        position: 'left',
        title: {isEnabled: true, caption: 'Inventory to sales', tooltip: 'Inventory - sales over time'},
        seriesAggregationInfo: {isEnabled: true},
    },
    units: {
        type: 'number',
    },
});

const InventoryChart = ({
                            productId,
                            loading,
                            noData,
                            isEmpty,
                        }: ChartsProps): JSX.Element => {
    const chartsData = getInventoryChartsData(productId, 2, noData)[0];
    const chartConfig = buildChartConfig(true);
    console.log(chartsData)
    return (
        <div className={styles['inventory-sales-chart']}>
            <LineChart
                definitions={{data: chartsData, extraConfig: chartConfig}}
                loading={loading}
                key={1}
                isEmpty={isEmpty}
            />
        </div>
    );
};

export default InventoryChart;
