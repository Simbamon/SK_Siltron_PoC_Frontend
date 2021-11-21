import React, { Component } from 'react'
import {Nav, NavLink, NavMenu, ProfilePic, Profile, ProfileName } from './Navbar_element'
import { Email, NotificationsNoneOutlined, ExpandMore, Search } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';


export class Navbar extends Component {
    render() {
        const { t } = this.props;

        return (
            <>
                <Nav>
                    <NavLink to="/dashboard">
                        <h3>SK 실트론 데이터 카탈로그</h3>
                    </NavLink>
                    <NavMenu>
                        <NavLink>
                            <Search style = {{fontSize: "1.35rem"}}/>
                        </NavLink>
                        <NavLink>
                            <NotificationsNoneOutlined style = {{fontSize: "1.35rem"}}/>
                        </NavLink>
                        <NavLink>
                            <Email style = {{fontSize: "1.35rem"}}/>
                        </NavLink>
                        <NavLink>
                            <Profile>
                                <ProfilePic img = {require('../../images/profile_pic.png').default} alt='discovery workshop'></ProfilePic>
                                <ProfileName>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <p style = {{fontSize: "0.85rem", lineHeight: "0.85rem"}}>{t('navbar.1')}</p>
                                        <p style = {{fontSize: "0.65rem", lineHeight: "0.65rem"}}>Data Engineer</p>
                                    </div>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <ExpandMore style = {{paddingLeft: "5px", fontSize: "1.1rem"}} />
                                    </div>
                                </ProfileName>
                            </Profile>
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default withTranslation()(Navbar)