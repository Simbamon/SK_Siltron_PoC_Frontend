import React, { Component } from 'react'

export class Asset_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [],
            loading: true,
            total_number_of_asset: null,
        };
    }

    async componentDidMount() {
        
        const meta_response = await fetch('/getassetlist')
        
        const data_meta = await meta_response.json()
        const data_meta_array = data_meta.results
        console.log(data_meta_array)

        const result = []

        for(var i = 0; i < data_meta_array.length; i++){
            try {
                    if(i == 7){
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
                            asset_type: asset_type
                            // tag: tag
                        }
                        result.push(obj)
                    }
                    

            } catch (error) {
                // console.log(error)
            }
        }

        this.setState({test: result,
                       total_number_of_asset: result.length
        })
        console.log("Asdf")
        console.log(result)
        console.log("Number of array: " + result.length)

        // const asset_meta = data_meta.metadata
        // const asset_meta2 = data_meta.metadata.usage
        // const asset_meta3 = data_meta.entity.data_asset

        // const data_biz_term = data_meta.entity.asset_terms.list
        
        // const data_classiicate = data_meta.entity.data_profile.data_classification_manual
        // const connection_path = data_meta.attachments[0]
        // const column_info = Object.keys(data_meta.entity.column_info)
        // const column_table_info = data_meta.entity

        // this.setState({ basic_info: asset_meta, 
        //                 qwer: asset_meta2, 
        //                 data_format: asset_meta3,
        //                 data_business_term: data_biz_term,
        //                 data_classification: data_classiicate,
        //                 connection_path: connection_path,
        //                 column_name: column_info
        //             })

        // function timeConverter(time){
        //     let dateObject = new Date(time)
        //     let month = dateObject.getMonth(time) + 1
        //     let year = dateObject.getFullYear()
        //     let date = dateObject.getDate()

        //     return `${year}년 ${month}월 ${date}일`
        // }

        // const last_updated_time = timeConverter(asset_meta2.last_update_time)
        // const last_accessed_time = timeConverter(asset_meta2.last_access_time)
        // const created_time = timeConverter(asset_meta.created)

        // this.setState({last_update_time: last_updated_time,
        //                last_access_time: last_accessed_time,
        //                create_time: created_time})
        
        // const result = []
        // column_info.forEach(function(map) {
        //     try {
        //         const column_desc = column_table_info.column_info[map].column_description
        //         const column_tgs = column_table_info.column_info[map].column_tags
        //         const column_biz_terms = column_table_info.column_info[map].column_terms[0].term_display_name
        //         const obj = {
        //             column_info: map,
        //             desc: column_desc,
        //             tag: column_tgs,
        //             bizterm: column_biz_terms
        //         }
        //         result.push(obj) 
        //     } catch (error) {
        //         // console.log(error)
        //     }
        // });

        // this.setState({table_info: result})

        // const connection_response = await fetch('/getconnection')
        // const data_connection = await connection_response.json()
        // const connection_source = data_connection.entity
        // const connection_source_type = data_connection.entity.properties
        // this.setState({ connection_source: connection_source,
        //                 connection_source_type: connection_source_type})
        

        // const review_response= await fetch('/getassetreview')
        // const data = await review_response.json()
        // const review_array = await data.resources
        
        // const review_package = []

        // for(var i = 0; i < review_array.length; i++){
        //     try {
        //         const rating = review_array[i].entity.rating
        //         const review = review_array[i].entity.review
        //         const time_data = new Date(review_array[i].metadata.updated_at)
        //         const time = time_data.getFullYear() + "년 " +
        //                      (time_data.getMonth() + 1) + "월 " +
        //                      time_data.getDate() + "일"
        //         const obj = {
        //             rating: rating,
        //             review: review,
        //             time: time
        //         }
        //         review_package.push(obj)
                
        //     } catch (error) {
        //         // console.log(error)
        //     }
        // }
    }
    
    render() {
        return (
            <>
                <div>
                    {this.state.test.map(info => 
                        <div>
                            <p>{info.name}</p>
                            <p>{info.description}</p>
                            <p>{info.review_star}</p>
                            <p>{info.review_number}</p>
                            <p>{info.asset_type}</p>
                        </div>
                    )}
                </div>

                {this.state.total_number_of_asset}
            </>
        )
    }
}

export default Asset_list
