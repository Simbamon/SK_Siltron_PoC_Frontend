import styled from 'styled-components'

export const DashboardWrap = styled.div`
    min-height: calc(100vh - 50px);
    height: 100%;
`

export const DashboardTitle = styled.div`
    padding: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.7rem;
`

export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
`

export const BoxItem = styled.div`
    flex: 1;
    margin : 10px;
    padding: 15px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);
`

export const BoxTrend = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 3px;
`

export const TopFive = styled.div `
    width: 100%;
    min-height: 380px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin-top: 10px;
`


export const DashboardTable = styled.table`
    flex: 1 1 calc(75% - 20px);
    margin : 10px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    height: 100%;
    width: 100%;
    display: table;
    margin-top: 15px;
    margin-bottom: 25px;
    border-collapse: collapse;
    overflow-x:auto;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);

    caption {
        display: inline;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 5px 0 5px 20px;
        line-height: 45px;
    }

    thead tr th {
        border: none;
        background-color: #2c333c;
        color: #FFF;
        font-weight: bold;
        border-top: 1px solid #c8c8c8;
        border-bottom: 1px solid #c8c8c8;
        
    }
    thead tr th:first-child,
    thead tr th:nth-child(5){
        width: 90px;
    }
    thead tr th:first-child,
    thead tr th:nth-child(4),
    thead tr th:nth-child(6) {
        text-align: center;
    }
    tbody tr td:first-child,
    tbody tr td:nth-child(4),
    tbody tr td:nth-child(6) {
        text-align: center;
    }
    th {
        padding: 5px 20px;
        height: 35px;
        border-bottom: 1px solid #c8c8c8;
    }
    td  {
        padding: 5px 20px;
        height: 45px;
    }
    
`

export const CatalogWrapper = styled.div`
    display: flex;
    margin-bottom :5px;
`

export const CatalogItem = styled.div`
    border: solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    text-align: center;

`

export const CatalogPicture = styled.img`
    max-width: 90%;
    min-height: 150px;
    max-height: 150px;
    
    &:hover {
        transition: all 0.3s ease-out;
        max-width: 100%;
    }
`

export const CatalogName = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 15px;
    color: black;
`

export const Client = styled.div`
    display: flex;
    
`

export const ClientPic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    text-decoration: none;
 
`

export const ClientName = styled.div`
    margin-left: 5px;
    vertical-align: middle;
    display: table;
`

export const Purchase = styled.div`
    display: table-cell;
    vertical-align: middle;

`

export const Predict = styled.div`
    display: inline;
    width: 100%;
    font-size: 0.75rem;
    font-weight: bold;
    border: 0.1rem solid blue;
    color: blue;
    padding: 5px 10px 5px 10px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: blue;
        color: white;
    }
    
`

export const PieChart = styled.table`
    flex: 1 1 calc(25% - 20px);
    margin: 10px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);
    flex-direction: row;
    flex-direction: column;
    text-align: left;
    font-size: 0.85rem;
    height: 100%;
    width: 100%;
    display: table;
    table-layout: fixed;
    margin-top: 15px;
    margin-bottom: 25px;

    caption {
        display: inline;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 5px 0 5px 20px;
        line-height: 45px;
    }
    th {
        padding: 5px 20px;
        height: 190px;
    }
    td  {
        display: flex;
        justify-content: space-between;
        padding: 1px 20px;
        line-height: 0.8rem;
    }
`

export const Graphs = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin-top: 10px;
`

export const BarGraph = styled.table`
    flex: 1 1 calc(33% - 20px);
    margin: 10px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);
    flex-direction: row;
    flex-direction: column;
    text-align: left;
    font-size: 0.85rem;
    height: 100%;
    min-height: 300px;
    width: 100%;
    display: table;
    table-layout: fixed;
    margin-top: 15px;
    margin-bottom: 25px;

    caption {
        display: inline;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 5px 0 5px 20px;
        line-height: 45px;
    }
    th {
        padding: 5px 20px;
        height: 210px;
    }
    td  {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        line-height: 1rem;
    }
`

export const Potential = styled.p`
    font-size: 0.9rem;
    color: #5F9AAE;
    font-weight: bold;
`