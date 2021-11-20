import styled from 'styled-components'

export const AssetDiv = styled.div`
    background: white;
    padding: 0.5rem calc((100vw - 1550px) / 2);
    //Padding to resize the window
`

export const AssetTitle = styled.div`
    background: white;
    height: 170px;
    width: 100%;
    vertical-align: middle;
    display: table;
    margin-top: 25px;
    margin-bottom: 15px;
`

export const AssetTitleWrapper = styled.div`
    background: white;
    vertical-align: middle;
    height: 100%;
    display: table-cell;
`

export const AssetTitleh1 = styled.h1 `
    flex: 1 0 50%;
    margin: auto;
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-weight: bold;
`

export const RequestButton = styled.button`

    background: #0062FF;
    white-space: nowrap;
    color: #fff;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    width: 150px;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: white;
        color: black;
    }

`

export const InfoText = styled.h1`
    margin: auto;
    color: #333333;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.1rem;
    font-weight: bold;
`

export const AbtData = styled.div`
    display: flex;
    flex-direction: row;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: table;
    border: 1px solid grey;
    box-shadow:1px 1px 1px 1px grey;
    margin-top: 15px;
    margin-bottom: 50px;
`

export const AbtSection = styled.div`
    display: flex;
`

export const UpdateSection = styled.div`
    padding: 20px;
`

export const AbtInfoSection = styled.div`
    padding: 20px;
`

export const DateDescription = styled.p`
    color: #565656;
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 7px;
    margin-bottom: 3px;
`

export const Dates = styled.p`
    color: #565656;
    font-size: 0.9rem;
    margin-right: 17px;
`

export const AbtTable = styled.table`
    //Change here for size
    width: 900px;
    font-size: 0.95rem;
    color: #222222;
    border-collapse: collapse;
    tbody tr td:first-child {
        width: 150px;
    }
    td {
        padding: 2px 10px;
        border-top: 1px solid #c8c8c8;
        border-bottom: 1px solid #c8c8c8
    }
    tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    
  }
  margin-bottom: 28px;
`

export const ColumnInfoTable = styled.table`
    flex-direction: row;
    flex-direction: column;
    text-align: left;
    font-size: 0.8rem;
    height: 100%;
    width: 100%;
    display: table;
    border: 1px solid grey;
    box-shadow:1px 1px 1px 1px grey;
    margin-top: 15px;
    margin-bottom: 25px;
    table-layout: fixed;

    border-collapse: collapse;
    thead tr th {
        border: none;
        font-weight: bold;
        
    }
    tbody tr td:first-child {
        /* width: 150px; */
        color: #1c6387;

    }
    th, td  {
        padding: 3px 15px;
        border-top: 1px solid #c8c8c8;
        border-bottom: 1px solid #c8c8c8;
        height: 39px;
    }
  margin-bottom: 50px;
`
