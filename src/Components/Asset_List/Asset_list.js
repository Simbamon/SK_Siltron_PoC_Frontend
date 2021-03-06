import React, { Component } from 'react'
import { AssetListDiv, AssetListTop, FilterBox, SearchBar, CatalogName, AssetListTable, ReviewAmounts, SortBy, SortByBox,
         AssetName, AssetTitleCatalogName, AssetSummary, DataType, AssetOwner, AssetOwnerName, LastUpdated, 
         TableBottom, ListNumber, PrevNextList, ApprovedText, TableNumberList} from './Asset_list_element'
import { Search, Storage, ExpandMore, CheckCircle, Cancel } from '@material-ui/icons'
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
        const meta_response = await fetch('/getassetlistbyreview')
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
                        const time = time_data.getFullYear() + "??? " +
                                     (time_data.getMonth() + 1) + "??? " +
                                     time_data.getDate() + "???"
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
                                <p style={{paddingLeft: "5px", color: "grey"}}>????????? ???????????? ??????????????? (???????????? ???, ???????????? ?????? ??????)</p>
                            </SearchBar>
                            <div style={{display: "table-cell", verticalAlign: "middle", backgroundColor: "#25292C", margin:"0px", width: "3%", cursor: "pointer"}}>
                                <Search style = {{color: "white", fontSize: "2rem", margin: "auto"}} />
                            </div>
                        </div>
                        <FilterBox>
                            <p style={{fontSize: "0.9rem", marginTop: "15px"}}>?????? <span style={{fontWeight: "bold", fontSize: "0.9rem"}}>{this.state.total_number_of_asset}</span>?????? ???????????? ????????????.</p>
                            <div style={{display: "flex", marginTop: "15px"}}>
                                
                                <SortBy>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <p style = {{fontSize: "0.85rem", lineHeight: "1rem"}}>??????: </p>
                                    </div>
                                    <SortByBox>
                                        <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                            <p style = {{fontSize: "0.85rem", lineHeight: "0.85rem"}}>?????? ?????????</p>
                                        </div>
                                        <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                            <ExpandMore style = {{paddingLeft: "5px", fontSize: "1.1rem"}} />
                                        </div>
                                    </SortByBox>
                                    
                                </SortBy>
                                
                            </div>
                        </FilterBox>
                    </AssetListTop>

                    {this.state.asset_list_info.map(info => info.name === "SK ????????? ?????? ?????? ?????????" ? (
                            <div>
                            <AssetListTable>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <Link to="catalog/asset_id=1ee6388b-25b2-48b1-9f20-0d144e7275df" style={{ textDecoration: 'none' }}>
                                                        <AssetName>{info.name}</AssetName>
                                                    </Link>
                                                    <AssetTitleCatalogName>{this.state.catalog_name}</AssetTitleCatalogName>
                                                    <CheckCircle style = {{paddingRight: "2px", paddingLeft: "10px", color: "#528AEF", fontSize: "0.9rem", marginTop: "auto", marginBottom: "auto"}} />
                                                    <ApprovedText>?????? ?????? ??????</ApprovedText>
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
                                                <AssetOwner style= {{marginBottom: "1px", marginTop: "3px"}}>????????? ????????????:</AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>{info.last_updated}</LastUpdated>
                                                <AssetOwner style= {{marginBottom: "1px"}}>??????: </AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>
                                                    <div style= {{display: "flex", alignItems: "center"}}>
                                                    <Rating defaultValue={info.review_star} precision={0.1} readOnly size="small" style={{ color: '#565656' }}/>
                                                    <ReviewAmounts>{info.review_number}?????? ??????</ReviewAmounts>
                                                    </div>
                                                </LastUpdated>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <AssetOwner style={{padding: "2px"}}>?????????:</AssetOwner>
                                                    <AssetOwnerName>Admin</AssetOwnerName>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                            </AssetListTable>
                            </div>
                        ) : (
                            <div>
                            <AssetListTable>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <Link to="catalog/asset_id=7d698965-f2f0-4338-af48-41758dbe87a0" style={{ textDecoration: 'none' }}>
                                                        <AssetName>{info.name}</AssetName>
                                                    </Link>
                                                    <AssetTitleCatalogName>{this.state.catalog_name}</AssetTitleCatalogName>
                                                    <Cancel style = {{paddingRight: "2px", paddingLeft: "10px", color: "#F64A7A", fontSize: "0.9rem", marginTop: "auto", marginBottom: "auto"}} />
                                                    <ApprovedText style = {{color: "#F64A7A"}}>?????? ?????? ??????</ApprovedText>
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
                                                <AssetOwner style= {{marginBottom: "1px", marginTop: "3px"}}>????????? ????????????:</AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>{info.last_updated}</LastUpdated>
                                                <AssetOwner style= {{marginBottom: "1px"}}>??????: </AssetOwner>
                                                <LastUpdated style= {{marginBottom: "3px"}}>
                                                    <div style= {{display: "flex", alignItems: "center"}}>
                                                    <Rating defaultValue={info.review_star} precision={0.1} readOnly size="small" style={{ color: '#565656' }}/>
                                                    <ReviewAmounts>{info.review_number}?????? ??????</ReviewAmounts>
                                                    </div>
                                                </LastUpdated>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style={{display: "flex"}}>
                                                    <AssetOwner style={{padding: "2px"}}>?????????:</AssetOwner>
                                                    <AssetOwnerName>Admin</AssetOwnerName>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                            </AssetListTable>
                        </div>
                        )
                    
                            
                    )}

                    <TableBottom>
                        <p style = {{fontSize: "0.9rem"}}>??? {this.state.total_number_of_asset}??? ??? {this.state.total_number_of_asset}?????? ???????????? ?????????</p>
                        <ListNumber>
                            <PrevNextList>??????</PrevNextList>
                            <TableNumberList>1</TableNumberList>
                            <PrevNextList>??????</PrevNextList>
                        </ListNumber>
                    </TableBottom>
                </AssetListDiv>
            </>
        )
    }
}

export default Asset_list
