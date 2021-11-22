import React, { Component } from 'react'
import { AssetListDiv, AssetListTop, FilterBox, SearchBar, CatalogName, AssetListTable, ReviewAmounts, SortBy, SortByBox,
         AssetName, AssetTitleCatalogName, AssetSummary, DataType, AssetOwner, AssetOwnerName, LastUpdated, 
         TableBottom, ListNumber, PrevNextList, TableNumberList} from './Asset_list_element'
import { Search, Storage, ExpandMore } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

export class Asset_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asset_list_info: [],
            loading: true,
            total_number_of_asset: null,
            catalog_name: null
        };
    }

    async componentDidMount() {
        const catalog_info_response = await fetch('/getcataloginfo')
        const catalog_info = await catalog_info_response.json()
        const meta_response = await fetch('/getassetlist')
        const data_meta = await meta_response.json()
        const data_meta_array = data_meta.results
        const catalog_name = catalog_info.entity.name

        const result = []

        for(var i = 0; i < data_meta_array.length; i++){
            try {
                    if(i === 7){
                        //Just fine connection i num 
                    }
                    else{
                        const name = data_meta_array[i].metadata.name
                        const description = data_meta_array[i].metadata.description
                        const time_data = new Date(data_meta_array[i].metadata.usage.last_updated_at)
                        // const tag = data_meta_array[i].tags[0]
                        const review_star = data_meta_array[i].metadata.rating
                        const review_number = data_meta_array[i].metadata.total_ratings
                        const asset_type = data_meta_array[i].metadata.asset_type 
                        const time = time_data.getFullYear() + "년 " +
                                     (time_data.getMonth() + 1) + "월 " +
                                     time_data.getDate() + "일"
                        const obj = {
                            name: name,
                            description: description,
                            last_updated: time,
                            review_star: review_star,
                            review_number: review_number,
                            asset_type: asset_type.toUpperCase()
                            // tag: tag
                        }
                        result.push(obj)
                    }
                    

            } catch (error) {
                // console.log(error)
            }
        }

        this.setState({asset_list_info: result,
                       total_number_of_asset: result.length,
                       catalog_name: catalog_name
        })
        console.log("Asdf")
        console.log(result)
        console.log("Number of array: " + result.length)
    }
    
    render() {
        return (
            <>
                <AssetListDiv>
                    <AssetListTop>
                        <CatalogName>{this.state.catalog_name}</CatalogName>
                        <div style={{ display: "table" }}>
                            <SearchBar>
                                <p style={{paddingLeft: "5px", color: "grey"}}>원하는 데이터를 입력하세요 (비지니스 텀, 태그로도 검색 가능)</p>
                            </SearchBar>
                            <div style={{display: "table-cell", verticalAlign: "middle", backgroundColor: "#25292C", margin:"0px", width: "3%", cursor: "pointer"}}>
                                <Search style = {{color: "white", fontSize: "2rem", margin: "auto"}} />
                            </div>
                        </div>
                        <FilterBox>
                            <p style={{fontSize: "0.9rem", marginTop: "15px"}}>전체 <span style={{fontWeight: "bold", fontSize: "0.9rem"}}>{this.state.total_number_of_asset}</span>건의 데이터가 있습니다.</p>
                            <div style={{display: "flex", marginTop: "15px"}}>
                                
                                <SortBy>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <p style = {{fontSize: "0.85rem", lineHeight: "1rem"}}>정렬: </p>
                                    </div>
                                    <SortByBox>
                                        <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                            <p style = {{fontSize: "0.85rem", lineHeight: "0.85rem"}}>마지막 업데이트</p>
                                        </div>
                                        <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                            <ExpandMore style = {{paddingLeft: "5px", fontSize: "1.1rem"}} />
                                        </div>
                                    </SortByBox>
                                    
                                </SortBy>
                                
                            </div>
                        </FilterBox>
                    </AssetListTop>

                    {this.state.asset_list_info.map(info => 
                        <div>
                            <AssetListTable>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <Link to="dashboard/prediction/1024" style={{ textDecoration: 'none' }}>
                                                        <AssetName>{info.name}</AssetName>
                                                    </Link>
                                                    <AssetTitleCatalogName>{this.state.catalog_name}</AssetTitleCatalogName>
                                                </div>
                                            </td>
                                            <td>
                                                <div style= {{display: "flex", alignItems: "center"}}>
                                                <Storage style = {{paddingRight: "5px"}}/>
                                                    <DataType>{info.asset_type}</DataType>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <AssetSummary>{info.description}</AssetSummary>
                                            </td>
                                            <td rowspan="2" style={{borderLeft: "1px solid grey"}}>
                                                <AssetOwner style= {{marginBottom: "1px", marginTop: "3px"}}>마지막 업데이트:</AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>{info.last_updated}</LastUpdated>
                                                <AssetOwner style= {{marginBottom: "1px"}}>평가: </AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>
                                                    <div style= {{display: "flex", alignItems: "center"}}>
                                                    <Rating defaultValue={info.review_star} precision={0.1} readOnly size="small" style={{ color: '#565656' }}/>
                                                    <ReviewAmounts>{info.review_number}개의 리뷰</ReviewAmounts>
                                                    </div>
                                                </LastUpdated>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <AssetOwner style={{padding: "2px"}}>담당자:</AssetOwner>
                                                    <AssetOwnerName>Admin</AssetOwnerName>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                            </AssetListTable>
                        </div>
                    )}

                    <TableBottom>
                        <p style = {{fontSize: "0.9rem"}}>총 {this.state.total_number_of_asset}건 중 {this.state.total_number_of_asset}건의 데이터를 보여줌</p>
                        <ListNumber>
                            <PrevNextList>이전</PrevNextList>
                            <TableNumberList>1</TableNumberList>
                            <PrevNextList>다음</PrevNextList>
                        </ListNumber>
                    </TableBottom>
                </AssetListDiv>
            </>
        )
    }
}

export default Asset_list
