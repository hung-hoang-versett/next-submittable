import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import { loginRequest } from "azureConfig/authConfig";
import React, { useEffect, useState } from "react";
import { callMsGraph } from "azureConfig/MsGraphApiCall";

const ProfileContent = () => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<any>(null);

  useEffect(() => {
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => setGraphData(response))
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() || undefined,
            });
          }
        });
    }
  }, [inProgress, graphData, instance]);
  return <div>{graphData ? graphData?.displayName : null}</div>;
};

const ErrorComponent = ({ error }: any) => {
  return <h6>An Error Occurred: {error.errorCode}</h6>;
};

const Loading = () => {
  return <h6>Authentication in progress...</h6>;
};

export default function Profile() {
  const authRequest = {
    ...loginRequest,
  };

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}
      loadingComponent={Loading}
    >
      <ProfileContent />
    </MsalAuthenticationTemplate>
  );
}
