import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem, BoxTrend, TopFive, DashboardTable, 
         Purchase, Predict, PieChart, Graphs, BarGraph, Potential, CatalogItem, CatalogWrapper } from './Dashboard_element'
import { ArrowDownward, ArrowUpward, Person, ShowChart, QuestionAnswer, Assignment } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import { Stop } from '@material-ui/icons'
import { Pie, Bar, Radar } from 'react-chartjs-2'
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
                                <td>
                                    <CatalogWrapper>
                                        <Link to="catalog" style={{ textDecoration: "none", width: "calc(20%)" }}>
                                            <CatalogItem>
                                                <Person style={{color: "blue", fontSize: "4.2rem"}}/>
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog" style={{ textDecoration: "none", width: "calc(20%)" }}>
                                            <CatalogItem>
                                            asdf
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog" style={{ textDecoration: "none", width: "calc(20%)" }}>
                                            <CatalogItem>
                                            asdf
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog" style={{ textDecoration: "none", width: "calc(20%)" }}>
                                            <CatalogItem>
                                            asdf
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog" style={{ textDecoration: "none", width: "calc(20%)" }}>
                                            <CatalogItem>
                                            asdf
                                            </CatalogItem>
                                        </Link>
                                    </CatalogWrapper>
                                    <div>
                                        
                                    </div>
                                </td>
                            </tbody>
                            
                                        
                        </DashboardTable>
                        
                        <PieChart>
                            <thead>
                                <caption>{t('piechart.1')}</caption>
                                <tr>
                                    <th>
                                    <Pie
                                        data ={{labels: ["삼성전자", "인텔", "AMD", "Qualcomm", "엔비디아"],
                                                datasets: [{data: [10, 6, 5, 6, 7],
                                                backgroundColor: ['#00A6FF', '#28A745', '#DC3545', '#FFC107', '#8107FF']}]}}
                                        options={{plugins: {
                                                        legend: {
                                                            display: false
                                                        }
                                                  },
                                                  maintainAspectRatio: false}}
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
                                        삼성전자
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
                                        인텔
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
                                        AMD
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
                                        Qualcomm
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
                                        엔비디아
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
                                <caption>2021년 제품 생산량</caption>
                                <tr>
                                    <th>
                                    <Bar
                                        data = {{labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월","8월", "9월", "10월", "11월", "12월"],
                                                datasets: [{data: [302, 305, 401, 190, 390, 601, 720, 402, 404, 354, 810, 594],
                                                            barThickness: 20,
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
                                <caption>2021년 4분기 공장별 데이터</caption>
                                <tr>
                                    <th>
                                    <Radar
                                        data = {{labels: ["공장A-NDU31021", "공장A-PWU332B1", "공장B-AZQ78S21", "공장B-DZU51B68", "공장C-LSZ36Y12", "공장C-EAB7913N"],
                                                datasets: [{data: [80, 71, 68, 71, 69, 82],
                                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                                    borderColor: 'rgb(54, 162, 235)',
                                                    pointBackgroundColor: 'rgb(54, 162, 235)',
                                                    pointBorderColor: '#fff',
                                                    pointHoverBackgroundColor: '#fff',
                                                    pointHoverBorderColor: 'rgb(54, 162, 235)'}]}}
                                                            options = {{ plugins: {
                                                                legend: {
                                                                    display: false
                                                                }
                                                            },
                                                            scales: {
                                                                r: {
                                                                    angleLines: {
                                                                        display: false
                                                                    },
                                                                    suggestedMin: 50,
                                                                    suggestedMax: 90
                                                                }
                                                            },
                                                            maintainAspectRatio: false
                                                          }}
                                                />
                                    </th>
                                </tr>
                            </thead>
                        </BarGraph>
                        <BarGraph>
                            <thead>
                                <caption>2021년 4분기 제품별 인벤토리</caption>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        SILTRON-BGA293-C-TR
                                        <Potential>2076 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SILTRON-BGA293-C-TY
                                       <Potential>3215 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SILTRON-BGA293-I-TR
                                        <Potential>5512 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SILTRON-BGA293-C-TY
                                        <Potential>379 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SILTRON-QFP293-C-TY
                                        <Potential>1150 Qty</Potential>
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
