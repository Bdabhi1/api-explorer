import { useState } from "react";
import AppContainer from "../../components/AppContainer";
import AppButton from "../../components/AppButton";
import AppSidebar from "../../components/AppSidebar";
import ProviderList from "./components/ProviderList";
import ProviderDetails from "./components/ProviderDetail";
import { IProviderDetails, Nullable } from "../../utils/types";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProviderDetail, setCurrentProviderDetail] =
    useState<Nullable<IProviderDetails>>(null);
  const [activeProvider, setActiveProvider] = useState<Nullable<string>>(null);

  const onSelectCurrentProviderDetail = (provider: IProviderDetails) => {
    setCurrentProviderDetail(provider);
    setIsOpen(false);
  };

  return (
    <AppContainer>
      {Boolean(currentProviderDetail) && (
        <ProviderDetails providerDetails={currentProviderDetail} />
      )}
      <AppButton
        onClick={() => {
          setIsOpen(true);
          setCurrentProviderDetail(null);
        }}
      >
        Explore {Boolean(currentProviderDetail) ? "more" : "web"} APIs
      </AppButton>
      <AppSidebar
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setActiveProvider(null);
        }}
      >
        <h3 className="flex-1">Select Provider</h3>
        <ProviderList
          activeProvider={activeProvider}
          setActiveProvider={setActiveProvider}
          onSelectCurrentProviderDetail={onSelectCurrentProviderDetail}
        />
      </AppSidebar>
    </AppContainer>
  );
}

export default Home;
