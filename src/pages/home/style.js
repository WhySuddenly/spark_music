import styled from 'styled-components';

export const HomeWarpper = styled.div`
    position:fixed;
    left:0;
    right:0;
    width:100%;
    height:100%;
    background:#848282 no-repeat center;
    background-size:100% 100%;
    .homebox{
        height:100%;
        background: rgba(125,125,125,0.9);
    }
`;

export const Container = styled.div`
    width:1200px;
    margin:0 auto;
    padding-top:20px;
    padding-bottom:120px;
    overflow:hidden;
`;



export const BottomBox = styled.div`
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:120px;
`;