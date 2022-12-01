import React, {useState} from 'react';
import {subMonths} from 'date-fns';
import {Datepicker, DateRange} from '@riskified/elmo-components';

const DateFilter = (): JSX.Element => {
    const [dateRange, setDateRange] = useState<DateRange>({
        start: subMonths(new Date(), 1),
        end: new Date(),
    });

    const onSelectionChange = (dateRange: DateRange) => {
        setDateRange(dateRange);
    }

    return (
        <Datepicker
            selectedDateRange={dateRange}
            onSelectionChange={onSelectionChange}
            variant={'with-presets'}
            label={''}
        />
    );
};

export default DateFilter;
