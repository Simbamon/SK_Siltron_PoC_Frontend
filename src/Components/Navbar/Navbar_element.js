import styled from 'styled-components'

export const Nav = styled.nav`
    background: rgb(20, 20, 20);
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`

export const NavLink = styled.div `
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.65rem;
    height: 100%;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const Profile = styled.div`
    display: flex;
    
`

export const ProfilePic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    text-decoration: none;
    cursor: pointer;
 
`

export const LogoPic = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    width: 60px;
    height: 28px;
    text-decoration: none;
    cursor: pointer;
    margin-left: 10px;
`

export const ProfileName = styled.div`
    margin-left: 8px;
    vertical-align: middle;
    display: table;
`

export const LanguageBox = styled.select`
    width: 6.5em;
    height: 1.8em;
`