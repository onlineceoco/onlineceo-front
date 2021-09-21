import styled from "styled-components";


export const ServicesContainer = styled.div`

    height: 480px;
    top: 0;
    display: flex;
    font-family: iransans;
    flex-direction: column;
    align-items: center;
    background:  #fff;
    
    
    @media screen and (max-width: 1000px) {
        height: auto;
    }
    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 46px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:480px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    max-height: 450px;
    padding-bottom: 25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        cursor: pointer;    
    }
    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const ServicesIcon = styled.img`
    height: 250px;
    justify-content: center;
    width: 250px;
    border-radius: 15px;
    margin-bottom: 0px;
    transition: all 0.9s ease-in-out;
    &:hover {
        transform: scale(1.2);
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
        cursor: pointer;
    }
`;

// export const ServicesH1 =styled.h1`
//     font-size: 1.5rem;
//     color: #186ddb;
//     margin-bottom: 10px;
//     padding-top: 25px;


//     @media screen and (max-width: 480px) {
//         font-size: 1.5rem;
//     }
// `;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    font-weight: bolder;
    text-align: center;
    white-space: nowrap;
    color: #000;
    margin-bottom: 10px;

`;

export const ServicesP = styled.p`
    font-size: 12px;
    font-weight: bolder;
    color: #000;
    transition: all 1s ease-in-out;
    text-align: center;
`;