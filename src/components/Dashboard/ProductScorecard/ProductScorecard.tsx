import React from 'react';
import {PrimaryScorecard, PrimaryScorecards, PrimaryScorecardTitle, PrimaryScorecardValue} from "@riskified/elmo-components";
import styles from './ProductScorecard.module.css'

export interface ProductScorecardProps {
    merchantName: string;
    product: string;
}

const ProductScorecard = ({
                              merchantName,
                              product
                          }: ProductScorecardProps): JSX.Element => {
console.log(product)
    return <PrimaryScorecards className={styles['product-scorecard']}>
        <PrimaryScorecard>
            <PrimaryScorecardTitle>Merchant Name</PrimaryScorecardTitle>
            <PrimaryScorecardValue>{merchantName}</PrimaryScorecardValue>
        </PrimaryScorecard>
        <PrimaryScorecard>
            <PrimaryScorecardTitle>Product Name</PrimaryScorecardTitle>
            <PrimaryScorecardValue>{product}</PrimaryScorecardValue>
        </PrimaryScorecard>
    </PrimaryScorecards>
};

export default ProductScorecard;
