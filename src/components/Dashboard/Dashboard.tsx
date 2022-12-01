import React, { useState } from 'react';
import styled from "styled-components";
import {CountChart, InventoryCharts} from "./SalesGraphs";
import DateFilter from "./DateFilter";
import ProductList from "./ProductList/ProductList";
import ProductScorecard from "./ProductScorecard/ProductScorecard";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 40px;
`;

const TopNav = styled.div`
    display: flex;
    margin: 0 0 20px 0;
`;

const MainContainer = styled.div`
    width: 100%;
`;

interface DashboardProps {
    productName: string,
    id: number,
}
const initialState : DashboardProps = {
    productName: 'Nintendo Switch',
    id: 0,
}


const Dashboard = (): JSX.Element => {
    const [value, setValue] = useState<DashboardProps>(initialState)
    return (
        <Container>
            <TopNav>
                <DateFilter></DateFilter>
            </TopNav>
            <MainContainer>
                <ProductScorecard product={value.productName} merchantName={'Riskistore'}></ProductScorecard>
                <ProductList value={value} setValue={setValue}></ProductList>
                <CountChart productId={value.id} loading={false} noData='none' isEmpty={false}/>
                <InventoryCharts productId={value.id} loading={false} noData='none' isEmpty={false}/>
            </MainContainer>
        </Container>
    );
};

export default Dashboard;
