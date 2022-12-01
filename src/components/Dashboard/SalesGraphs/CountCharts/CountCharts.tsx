import React from 'react';
import {ChartExtraConfig, ColumnChart} from '@riskified/charts-ui-react';
import styles from './CountCharts.module.css'
import {getPriceChartsData} from '../utils';

export interface ChartsProps {
    className?: string;
    loading: boolean;
    noData: 'none' | 'start' | 'middle' | 'start & middle';
    isEmpty: boolean;
    stacking?: boolean;
    productId: number
}

const buildChartConfig = (isStacked: boolean): ChartExtraConfig => ({
    tooltip: {
        summaryLine: {isEnabled: true, caption: 'Summary'},
        title: {isEnabled: true},
    },
    legend: {
        position: 'left',
        title: {isEnabled: true, caption: 'Title', tooltip: 'Tooltip'},
        seriesAggregationInfo: {isEnabled: true},
    },
    units: {
        type: 'currency',
    },
});

const CountChart = ({
                        productId,
                        loading,
                        noData,
                        isEmpty,
                    }: ChartsProps): JSX.Element => {
    const chartsData = getPriceChartsData(productId, 2, noData)[0];
    console.log("chartsData" + chartsData)
    const chartConfig = buildChartConfig(true);
    console.log(chartsData)
    return (
        <div className={styles['count-sales-chart']}>
            <ColumnChart
                definitions={{data: chartsData, extraConfig: chartConfig}}
                loading={loading}
                key={1}
                className={styles['count-sales-chart']}
                isEmpty={isEmpty}
            />
        </div>
    );
};

export default CountChart;
