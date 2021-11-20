import styled from 'styled-components'

export const ClientWrap = styled.div`
    background-color: #F3F3F4;
    min-height: calc(100vh - 50px);
    height: 100%;
    padding: 25px;
`

export const ClientTitle = styled.div`
    padding: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.7rem;
`

export const ClientBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
`

export const ClientBox = styled.div`
    flex: 1 1 calc(30% - 50px);
    margin : 10px;
    padding: 15px;
    min-height: 75vh;
    height: 100%;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.36);
    
`

export const Client = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

export const ClientPic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 200px;
    border-radius: 15%;
    height: 200px;
    text-decoration: none;
    margin: 5px auto;
`

export const ClientName = styled.h1`
    font-size: 1.8rem;
    padding: 1.2rem;
    line-height: 1.8rem;
`

export const ClientInfo = styled.table`
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.1rem;
    width: 100%;
    table-layout: fixed;
    display: table;
    margin-bottom: 25px;
    border-collapse: collapse;
    overflow-x:auto;
    /* box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.36); */

    caption {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 5px 0 5px 20px;
        line-height: 1.1rem;
        
    }

    tbody tr td:first-child {
        text-align: left;
    }
    tbody tr td:nth-child(2) {
        text-align: right;
    }
    td  {
        padding: 3px 20px;
        height: 100%;
        
    }
    
`
export const ClientBox2 = styled.div`
    flex: 1 1 calc(70% - 50px);
    margin : 10px;
    padding: 15px;
    min-height: 75vh;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.36);
    display: grid;
    
    @media screen and (max-width: 500px) {
        height: 40vh;
    }
`

export const PieChart = styled.table`
    white-space: nowrap;
    background-color: white;
    flex-direction: row;
    flex-direction: column;
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
        padding: 0 0 0 20px;
        line-height: 45px;
    }
    th {
        max-height: 500px;
    }
`