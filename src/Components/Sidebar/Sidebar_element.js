import styled from 'styled-components'

export const SideBar = styled.div`
    min-height: calc(100vh - 50px);
    height: 100%;
    width: 200px;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const SidebarWrapper = styled.div `
    padding: 20px;
    color : #555;

`
export const ProfileSection = styled.div `
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${props => props.img});
    background-size: cover;
    margin: -20px;

`

export const ProfilePic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 40px;
    border-radius: 50%;
    height: 40px;
    text-decoration: none;
`

export const SidebarTitle = styled.p `
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-top: 25px;
    margin-bottom: 5px;
`

export const SidebarList = styled.ul `
    list-style: none;
    cursor: pointer;
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: 20px;
`

export const SidebarListItem = styled.li `
    padding: 5px;
    display: flex;
    align-items: center;
    
    justify-content: space-between;

    &:hover {
    transition: all 0.3s ease-out;
    background-color: #1c2237;
    color: #FFF;
    }
`