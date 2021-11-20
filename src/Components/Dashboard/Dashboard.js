import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem, BoxTrend, TopFive, DashboardTable, 
         Purchase, Predict, PieChart, Graphs, BarGraph, Potential } from './Dashboard_element'
import { ArrowDownward, ArrowUpward, Person, ShowChart, QuestionAnswer, Assignment } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import { Stop } from '@material-ui/icons'
import { Doughnut, Bar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'



export class Dashboard extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
            <DashboardWrap>
                <div style={{padding: "25px"}}>
                <DashboardTitle>
                {t('sidebar.1')}
                </DashboardTitle>
                <BoxInfo>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>{t('dashboard.1')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={8764*0.75}
                                            end={8764}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>15.3%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#00A6FF", margin:"0px 5px"}}>
                                    <Person style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>{t('dashboard.2')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        {t('dashboard.5-1')}
                                        <CountUp 
                                            start={t('dashboard.5')*0.75}
                                            end={t('dashboard.5')}
                                            duration ={0.9}
                                            separator=","
                                        />
                                        </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>8.61%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#28A745", margin:"0px 5px"}}>
                                    <ShowChart style={{color: "#FFF", fontSize: "4.2rem", textAlign: "center"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>{t('dashboard.3')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={122*0.75}
                                            end={122}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "pink"}}>
                                            <p style={{fontSize: "0.6rem", color: "red", marginLeft: "2px"}}>3.57%</p>
                                            <ArrowDownward  style={{fontSize: "0.7rem", color: "red", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#DC3545", margin:"0px 5px"}}>
                                    <QuestionAnswer style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>{t('dashboard.4')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={1521*0.75}
                                            end={1521}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>12.9%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#FFC107", margin:"0px 5px"}}>
                                    <Assignment style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                    </BoxInfo>
                    <TopFive>
                        <DashboardTable>
                            <thead>
                                <caption>데이터 카탈로그</caption>
                                <tr>
                                    <th>원하시는 카테고리를 고르세요</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div>
                                    <Link to="dashboard/prediction/1024" style={{ textDecoration: 'none' }}>
                                        <Predict>{t('table.10')}</Predict>
                                    </Link>
                                </div>
                                <div>
                                    asdfdsf
                                </div>
                            </tbody>
                            
                                        
                        </DashboardTable>
                        
                        <PieChart>
                            <thead>
                                <caption>{t('piechart.1')}</caption>
                                <tr>
                                    <th>
                                    <Doughnut
                                        data ={{labels: [t('product.1'), t('product.2'), t('product.3'), t('product.4'), t('product.5')],
                                                datasets: [{data: [10, 6, 5, 6, 7],
                                                backgroundColor: ['#00A6FF', '#28A745', '#DC3545', '#FFC107', '#8107FF']}]}}
                                        options={{plugins: {
                                                        legend: {
                                                            display: false
                                                        }
                                                  },
                                                  maintainAspectRatio: false, cutout: 70}}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#00A6FF", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        {t('product.1')}
                                        </Purchase>
                                        </div>
                                        {t('piechart.2')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#28A745", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        {t('product.2')}
                                        </Purchase>
                                        </div>
                                        {t('piechart.3')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#DC3545", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        {t('product.3')}
                                        </Purchase>
                                        </div>
                                        {t('piechart.4')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#FFC107", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        {t('product.4')}
                                        </Purchase>
                                        </div>
                                        {t('piechart.5')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#8107FF", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        {t('product.5')}
                                        </Purchase>
                                        </div>
                                        {t('piechart.6')}
                                    </td>
                                </tr>
                              
                            </tbody>
                        </PieChart>
                    </TopFive>
                    <Graphs>
                        <BarGraph>
                            <thead>
                                <caption>{t('charts.1')}</caption>
                                <tr>
                                    <th>
                                    <Bar
                                        data = {{labels: [t('product.1'), t('product.2'), t('product.3'), t('product.4'), t('product.5')],
                                                datasets: [{data: [402, 404, 354, 590, 594],
                                                            barThickness: 40,
                                                            backgroundColor: ['#00A6FF']}]}}
                                        options = {{ plugins: {
                                                        legend: {
                                                            display: false
                                                        }
                                                    },
                                                    scales: {
                                                        y: {
                                                            suggestedMax: 700
                                                        }
                                                    }
                                                  }}
                                        />
                                    </th>
                                </tr>
                            </thead>
                        </BarGraph>
                        <BarGraph>
                            <thead>
                                <caption>{t('charts.2')}</caption>
                                <tr>
                                    <th>
                                    <Bar
                                        data = {{labels: [t('product.1'), t('product.2'), t('product.3'), t('product.4'), t('product.5')],
                                                datasets: [{data: [38, 63, 27, 85, 72],
                                                            barThickness: 40,
                                                            backgroundColor: ['#FFC107']}]}}
                                        options = {{ plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        tooltip: {
                                                            callbacks: {
                                                                label: function(context) {
                                                                    var label = context.dataset.label || '';
                                                                    label += new Intl.NumberFormat('en-US', { style: 'percent' }).format(context.parsed.y/100);
                                                                    return label;
                                                                }
                                                            }
                                                        }
                                                    },
                                                    scales: {
                                                        y: {
                                                            suggestedMax: 100,
                                                            ticks: {
                                                               callback: function(value) {
                                                                 return value+"%"
                                                               }
                                                            }
                                                        }
                                                    }
                                                  }}
                                        labels = {{ render: 'value'}}
                                        />
                                    </th>
                                </tr>
                            </thead>
                        </BarGraph>
                        <BarGraph>
                            <thead>
                                <caption>{t('charts.3')}</caption>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>{t('product.1')}</p>
                                        <Potential>{t('charts.4')}</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       {t('product.2')}
                                       <Potential>{t('charts.5')}</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {t('product.3')}
                                        <Potential>{t('charts.6')}</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {t('product.4')}
                                        <Potential>{t('charts.7')}</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {t('product.5')}
                                        <Potential>{t('charts.8')}</Potential>
                                    </td>
                                </tr>
                              
                            </tbody>
                        </BarGraph>
                    </Graphs>
                </div>
            </DashboardWrap>
                
            </>
        )
    }
}

export default withTranslation()(Dashboard)
