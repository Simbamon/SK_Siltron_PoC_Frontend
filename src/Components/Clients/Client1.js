import React, { Component } from 'react'
import { ClientWrap, ClientTitle, ClientBoxWrapper, ClientBox, Client, ClientPic, ClientName, ClientInfo, ClientBox2, PieChart } from './Client_element'
import { withTranslation } from 'react-i18next';
import Client1KR from '../../images/client1KR.jpg';
import Client1EN from '../../images/client1EN.jpg';
import { Bar } from 'react-chartjs-2'

export class Client1 extends Component {
    render() {

        const { t } = this.props;
        
        return (
            <>
                <ClientWrap>
                    <ClientTitle>
                        Client
                    </ClientTitle>
                    <ClientBoxWrapper>
                        <ClientBox>
                            <Client>
                                <div>
                                <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client1KR : Client1EN} alt='discovery workshop'></ClientPic>
                                <ClientName>{t('client.1')}</ClientName>
                                <ClientInfo>
                                <thead>
                                    <caption>{t('clientInfo.1')}</caption>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('clientInfo.2')}</td>
                                        <td>1024</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.3')}</td>
                                        <td>36세</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.4')}</td>
                                        <td>미혼</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.5')}</td>
                                        <td>서울특별시 송파구</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.6')}</td>
                                        <td>간호사</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.7')}</td>
                                        <td>학사</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.8')}</td>
                                        <td>이메일</td>
                                    </tr>
                                </tbody>
                                
                                </ClientInfo>
                                <ClientInfo>
                                <thead>
                                    <caption>{t('clientInfo.9')}</caption>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('clientInfo.10')}</td>
                                        <td>48,000,000원</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.11')}</td>
                                        <td>있음</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.12')}</td>
                                        <td>895,000원</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.13')}</td>
                                        <td>668점</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.14')}</td>
                                        <td>3등급</td>
                                    </tr>
                                    <tr>
                                        <td>{t('clientInfo.15')}</td>
                                        <td>자금 확보</td>
                                    </tr>
                                </tbody>
                                
                                </ClientInfo>
                                </div>
                                
                                

                            </Client>
                        </ClientBox>
                        <ClientBox2>
                        <PieChart>
                        <thead>
                                <caption>제품 추천</caption>
                                <tr>
                                    <th>
                                    <Bar
                                        data = {{labels: [t('product.1'), t('product.2'), t('product.3'), t('product.4'), t('product.5')],
                                        datasets: [{data: [91, 87, 65, 31, 22],
                                                        barThickness: 40,
                                                        backgroundColor: ['#00A6FF']}]}}
                                        options = {{
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        tooltip: {
                                                            callbacks: {
                                                                label: function(context) {
                                                                    var label = context.dataset.label || '';
                                                                    label += new Intl.NumberFormat('en-US', { style: 'percent' }).format(context.parsed.x/100);
                                                                    return label;
                                                                }
                                                            }
                                                        }
                                                    },
                                                    indexAxis: 'y',
                                                    scales: {
                                                        x: {
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
                        </PieChart>
                        
                        
                        </ClientBox2>
                    </ClientBoxWrapper>
                </ClientWrap>
            </>
        )
    }
}

export default withTranslation()(Client1)
