import styled from 'styled-components'

export const AssetListDiv = styled.div`
    background: white;
    padding: 0.5rem calc((100vw - 1350px) / 2);
    //Padding to resize the window
`
export const AssetListTop = styled.div`
    background: white;
    height: 100%;
    width: 100%;
    vertical-align: middle;
    display: table;
    margin-top: 25px;
    margin-bottom: 15px;
`

export const FilterBox = styled.div`
    display: flex;
    height: 100%;
    vertical-align: middle;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const SearchBar = styled.div`
    background: white;
    vertical-align: middle;
    display: table-cell;
    border: 0.20rem solid #25292C;
    width: 98%;
    height: 1.7rem;
    cursor: text;
`

export const CatalogName = styled.h1`
    margin-bottom: 20px;
`

export const AssetListTable = styled.table`
    flex: 1;
    white-space: nowrap;
    border: 0.5px solid grey;
    box-shadow:1px 1px 1px 1px grey;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    height: 100%;
    width: 100%;
    display: table;
    margin-top: 15px;
    margin-bottom: 25px;
    border-collapse: collapse;
    table-layout:fixed;

    tbody tr td:first-child{
        width: 80%;
        border-bottom: 1px solid grey;

    }
    
    tbody tr:first-child{
        border-bottom: 1px solid grey;
        height:62px;
    }
    tbody tr:nth-child(2){
        height:47px;
        overflow-wrap: break-word;
    }
    tbody tr:nth-child(3){
        height:35px;
    }
    td  {
        padding: 1px 10px;
    }
    
`

export const AssetName = styled.p`
    color: #1c6387;
    font-weight: bold;
    font-size: 1.38rem;
    line-height: 2rem;
    display: flex;
    cursor: pointer;

    &:hover {
    border-bottom: 0.2rem solid #1c6387;
    }
`

export const AssetTitleCatalogName = styled.p`
    border: 0.1rem solid #e4e4e4;
    background-color: #e4e4e4;
    height: 50%;
    font-size: 0.7rem;
    padding: 5px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: .7rem;
    font-weight: normal;
    border-radius: 3px;
    color: black;
    
`

export const SortBy = styled.div`
    vertical-align: middle;
    display: table;
`

export const DataType = styled.p`
    color: #565656;
    font-size: 0.8rem;
`

export const SortByBox = styled.div`
    margin-left: 10px;
    border: 1px solid grey;
    padding-left: 10px;
    line-height: 1rem;
    background: #e4e4e4;
    color: black;
    cursor: pointer;

    &:hover {
    transition: all 0.3s ease-out;
    background-color: #b6b6b6;
    }
`

export const AssetSummary = styled.p`
    font-size: 0.9rem;
    overflow-wrap: break-word;
`

export const AssetOwner = styled.p`
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.75rem;
`

export const AssetOwnerName = styled.p`
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.75rem;
    margin-left: 3px;
    border: 1px solid #1c6387;
    padding: 1px;
    border-radius: 3px;
    background: #1c6387;
    color: white;

`

export const LastUpdated = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 2px;
`

export const ReviewAmounts = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 10px;

    &:hover {
        border-bottom: 1px solid black;
        cursor: pointer;
    }
`

export const TableBottom = styled.div`
    display: flex;
    justify-content: space-between;
`