import React, { Component } from 'react'
import { SideBar, SidebarWrapper, SidebarList, SidebarListItem, ProfileSection, ProfilePic } from './Sidebar_element'
import { Dashboard, AssignmentInd, DesktopMac, KeyboardArrowRight, Cloud , BarChart, Settings} from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    render() {
        const { t } = this.props;
        // const handleClick = async() => {
        //     const data = await fetch('/start')
        //     console.log(data)
        // } 
        return (
            <>  
                
                <SideBar>
                    <SidebarWrapper>
                            <ProfileSection img = {require('../../images/profile_background.jpg').default} alt='background photo'>
                                <div style={{paddingTop: "15px", display: "flex", justifyContent: "center"}}>
                                    <ProfilePic img = {require('../../images/profile_pic.png').default} alt='profile photo'></ProfilePic>
                                </div>
                                <div style={{paddingTop: "5px", paddingBottom: "15px", textAlign: "center" }}>
                                    <p style={{color: "white", fontSize: "0.8rem", marginBottom:"2px", lineHeight: "1.0rem"}}>{t('navbar.1')}</p>
                                    <p style={{color: "#c5c7c9", fontSize: "0.6rem", lineHeight: "0.8rem"}}>{t('sidebar.4')}</p>
                                </div>
                                
                            </ProfileSection>
                            <SidebarList>
                                <Link to="/dashboard" style={{ textDecoration: 'none', color: '#555' }}>
                                    <SidebarListItem>
                                        <div style= {{display: "flex", alignItems: "center"}}>
                                            <Dashboard style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                            {t('sidebar.1')}
                                        </div>
                                        <KeyboardArrowRight />
                                    </SidebarListItem>
                                </Link>
                                <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#555' }}>
                                    <SidebarListItem>
                                        <div style= {{display: "flex", alignItems: "center"}}>
                                            <Cloud style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                            IBM CP4D ????????????
                                        </div>
                                    </SidebarListItem>  
                                </a>
                                <SidebarListItem>
                                    <div style= {{display: "flex", alignItems: "center"}}>
                                        <BarChart style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                        Tableau ????????????
                                    </div>
                                </SidebarListItem>
                                {/*This is for local file execution command */}
                                {/* <SidebarListItem onClick = {handleClick}>
                                    <div style= {{display: "flex", alignItems: "center"}}>
                                        <BarChart style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                        Tableau ????????????
                                    </div>
                                </SidebarListItem> */}
                                <Link to="/client" style={{ textDecoration: 'none', color: '#555' }}>
                                    <SidebarListItem>
                                        <div style= {{display: "flex", alignItems: "center"}}>
                                            <AssignmentInd style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                            ????????? ?????? ??????
                                        </div>
                                        <KeyboardArrowRight />
                                    </SidebarListItem>
                                </Link>
                                <Link to="/prediction" style={{ textDecoration: 'none', color: '#555' }}>
                                    <SidebarListItem to="/prediction">
                                        <div style= {{display: "flex", alignItems: "center"}}>
                                            <DesktopMac style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                            ????????? ??????
                                        </div>
                                        <KeyboardArrowRight />
                                    </SidebarListItem>
                                </Link>
                                <Link to="/prediction" style={{ textDecoration: 'none', color: '#555' }}>
                                    <SidebarListItem to="/prediction">
                                        <div style= {{display: "flex", alignItems: "center"}}>
                                            <Settings style = {{paddingRight: "5px", paddingLeft: "10px"}}/>
                                            ?????? ?????? ?????????
                                        </div>
                                        <KeyboardArrowRight />
                                    </SidebarListItem>
                                </Link>
                                
            
                            </SidebarList>
                    </SidebarWrapper>
                </SideBar>
                
            </>
        )
    }
}

export default withTranslation()(Sidebar)