import styled from "styled-components";
import { 
    SectionContainerCard,
    SectionBigHeadingCard,
    SectionParagraphAll,
    SectionTitleParagraph,
    } from "../../components";


// Styled elements for the Card go here
export const StyledContainerCard = styled(({ height, ...props }) => <SectionContainerCard {...props} />)`
  align-items: center;

`;
export const StyledTitle = styled((props) => <SectionBigHeadingCard {...props} />)`

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;

}`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
margin-bottom: 50px;
margin-right: 25px;
@media (max-width: 600px) {
  margin-right: 0;
}
`;

export const StyledDescriptionCard = styled((props) => <p{...props} />)`
text-align: center;
font-family: Poppins;
font-size: 1.25rem;
line-height: 1.875rem;
font-weight: 300;
  margin: 10px;
  text-align: center;
@media (max-width: 640px) {
   margin-left: 50px;
    
  font-size: 1rem;
  
}

`;

export const StyledSectionContainerSmallCard=styled(({...props}) => <div {...props}/>)`
 display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-position-x: 20%;
  background-repeat: no-repeat;
  background-image: url('/background.png');
  background-size:2040px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-size: 640px;
    background-position-x: 10%;
    height: auto;
  }
`
export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: inline-block;
  max-width: 33.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  @media (max-width: 640px) {
    max-width: 20rem;
    margin-bottom: 20px;
   
  }
  @media (max-width: 480px) {
    max-width: 16rem;
  margin-left: 30px;
  
}`;

export const StyledSectionParagraphs = styled(({ ...props }) => <div {...props} />)`
cursor: pointer;

`;
export const StyledSectionWrapper=styled(({ ...props }) => <div {...props} />)`
display: flex;
align-items: center;
border:1px solid;
border-color:#9a9696;
  width: 480px;
  background-color: #edebeb;
  margin:  22px 0 39px 0;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    border:2px solid Blue;
  }

@media (max-width: 1024px) {
  width: 480px;
}
@media (max-width: 640px) {
  width: 300px;
  align-items: center; 
}
  @media (max-width: 480px) {
  width: 250px;
  align-items: center; 
  margin-left: 50px;
}`;

export const StyledSectionImage = styled(({ ...props }) => <div {...props} />)`
width: 70px;
padding-top: 45px;
margin: 0 40px 15px 40px;
@media (max-width: 640px) {
  width: 50px;
  padding-top: 20px;
  margin: 5px;
}
`;
export const StyledSectionTitleOneParagraph = styled(({ ...props }) => <div {...props} />)`
@media (max-width: 640px) {
  width: 50%;
  margin-left: 15px;
}
`;
export const StyledTitleParagraph = styled(({ ...props }) => <SectionTitleParagraph {...props} />)`

`;
export const StyledSectionParagraph = styled((props) => <SectionParagraphAll{...props} />)`

`;

