import React from "react";
import styled from "styled-components";
import { IProviderDetails, Nullable } from "../../../utils/types";

interface ProviderDetailsProps {
  providerDetails: Nullable<IProviderDetails>;
}

const ProviderDetailContainer = styled.div`
  color: #f2f2f2;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`;

const ProviderImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const DescriptionDiv = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: larger;
  margin-bottom: 4px;
`;

function ProviderDetails({ providerDetails }: ProviderDetailsProps) {
  return (
    <ProviderDetailContainer>
      <Header>
        <ProviderImg src={providerDetails?.info["x-logo"].url} alt="provider" />
        <h1>{providerDetails?.info.title}</h1>
      </Header>
      <DescriptionDiv>
        <Title>Description</Title>
        {providerDetails?.info.description && (
          <div
            dangerouslySetInnerHTML={{
              __html: providerDetails?.info.description,
            }}
          ></div>
        )}
      </DescriptionDiv>
      <DescriptionDiv>
        <Title>Swagger</Title>
        <div>{providerDetails?.swaggerUrl}</div>
      </DescriptionDiv>
      <DescriptionDiv>
        <Title>Contact</Title>
        <div>Email&ensp;&ensp;&ensp;&ensp;{providerDetails?.info.contact?.email}</div>
        <div>Name&ensp;&ensp;&ensp;{providerDetails?.info.contact?.name}</div>
        <div>Url&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{providerDetails?.info.contact?.url}</div>
      </DescriptionDiv>
    </ProviderDetailContainer>
  );
}

export default ProviderDetails;
