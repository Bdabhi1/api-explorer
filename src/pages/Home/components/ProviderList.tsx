import React, { SetStateAction, useState } from "react";
import styled from "styled-components";
import useGetProviderList from "../../../hooks/useGetProviderList";
import ArrowIcon from "../../../assets/icons/arrow-down-icon.svg";
import { IProviderDetails, Nullable } from "../../../utils/types";
import useGetLazyProviderDetail from "../../../hooks/useGetLazyProviderDetail";

const ProviderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4;
  overflow: auto;
  margin-bottom: 30px;
`;

const ProviderItem = styled.div`
  margin-block: 5px;
`;

const ProviderDropDown = styled.div`
  background-color: #16232e;
  border-radius: 5px;
  padding: 10px;
`;

const ProviderItemContainer = styled.div`
  display: flex;
  padding-inline: 5px;
  padding-block: 3px;
  justify-content: space-between;
  cursor: pointer;
`;

const AccordionDetailMainContainer = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  max-height: ${({ isOpen }) => (isOpen ? "none" : "0")};
  transition: max-height 0.3s ease;
`;

const AccordionDetail = styled.div`
  align-items: center;
  padding-inline: 5px;
  cursor: pointer;
  transition: all 0.1s;
  display: flex;
`;

const ProviderImg = styled.img`
  max-width: 33px !important;
  max-height: 33px !important;
  margin-right: 5px;
`;

const ArrowImg = styled.img<{ isOpen: boolean }>`
  rotate: ${({ isOpen }) => (isOpen ? "180deg" : "0deg")};
  transition: all 0.3s;
`;

interface ProviderListProps {
  activeProvider: Nullable<string>;
  setActiveProvider: React.Dispatch<SetStateAction<Nullable<string>>>;
  onSelectCurrentProviderDetail: (provider: IProviderDetails) => void;
}

function ProviderList({
  activeProvider,
  setActiveProvider,
  onSelectCurrentProviderDetail,
}: ProviderListProps) {
  const { providers } = useGetProviderList();
  const { getProviderDetail, loading: isProvideDetailLoading } =
    useGetLazyProviderDetail();
  const [activeProviderDetails, setActiveProviderDetails] =
    useState<Nullable<IProviderDetails[]>>(null);

  const onSelectProvide = async (providerName: string) => {
    if (activeProvider === providerName) {
      setActiveProvider(null);
      setActiveProviderDetails(null);
      return;
    }
    setActiveProvider(providerName);
    setActiveProviderDetails(null);
    const providerDetails = await getProviderDetail(providerName);
    const apis = providerDetails?.apis;
    const providerDetailsData = apis ? Object.values(apis) : null;
    setActiveProviderDetails(providerDetailsData);
  };

  return (
    <ProviderListContainer>
      {providers?.map((item, index) => (
        <ProviderItem key={index}>
          <ProviderDropDown>
            <ProviderItemContainer onClick={() => onSelectProvide(item)}>
              <span>{item}</span>
              <ArrowImg
                isOpen={activeProvider === item}
                src={ArrowIcon}
                alt="arrow"
              />
            </ProviderItemContainer>
            <AccordionDetailMainContainer isOpen={activeProvider === item}>
              {isProvideDetailLoading && <span>Loading...</span>}
              {activeProviderDetails &&
                activeProviderDetails.length > 0 &&
                activeProviderDetails.map((provider, index) => (
                  <AccordionDetail
                    key={`provider-detail-${index}`}
                    onClick={() => onSelectCurrentProviderDetail(provider)}
                  >
                    <ProviderImg
                      src={provider?.info?.["x-logo"].url}
                      alt="provider"
                    />
                    <span>{provider?.info?.title}</span>
                  </AccordionDetail>
                ))}
            </AccordionDetailMainContainer>
          </ProviderDropDown>
        </ProviderItem>
      ))}
    </ProviderListContainer>
  );
}

export default ProviderList;
