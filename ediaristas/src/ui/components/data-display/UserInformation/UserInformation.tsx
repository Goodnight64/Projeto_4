import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  UserDescription1,
  UserDescription2,
} from "./UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  description1: string;
  description?: string;
  description2: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  description,
  description1,
  description2,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
      <UserDescription1>{description1}</UserDescription1>
      <UserDescription2>{description2}</UserDescription2>
    </UserInformationContainer>
  );
};

export default UserInformation;
