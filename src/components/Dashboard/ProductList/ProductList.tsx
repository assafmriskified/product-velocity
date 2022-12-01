import React, {useState} from 'react';
import {Dropdown, OptionType} from "@riskified/elmo-components";
import styles from './ProductList.module.css'

const ProductList = (props: any): JSX.Element => {

    const productsJson = {
        products:
            [
                {id:0,productName:"nintendo-switch", inventoryCount: 3450},
                {id:1,productName:"coffe-machine", inventoryCount: 1000},
                {id:2,productName:"bose-headphones", inventoryCount: 40}
            ]
    }

    const { value, setValue } = props;

    const loadOptions = (
        inputValue: string,
        resolveCallback: (options: OptionType[]) => void,
    ) => {
        resolveCallback(productsJson.products.map((product: any) => ({
            label: product.productName,
            value: product.id,
            count: product.inventoryCount
        })));
    };

    return <Dropdown className={styles['product-list']}
                     isSearchable
                     value={{
                         label: value.productName,
                         value: value.id,
                         count: value.inventoryCount
                     }}
                     onChange={(_, option) => setValue(
                         {id: option.value, productName: option.label, inventoryCount: option.count}
                     )}
                     loadOptions={loadOptions}
    />
};

export default ProductList;
