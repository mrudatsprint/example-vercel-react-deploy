import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  FusionAuthProvider,
  FusionAuthProviderConfig,
} from "@fusionauth/react-sdk";

const config: FusionAuthProviderConfig = {
  clientId: "916e724d-c4f1-4709-aa89-fb65652bacf7",
  redirectUri: "https://bank-react.rudedawg-integration.com",
  postLogoutRedirectUri: "https://bank-react.rudedawg-integration.com",
  serverUrl: 'https://fusionauth.rudedawg-integration.com',
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  autoRefreshSecondsBeforeExpiry: 120,
  onRedirect: (state?: string) => {
    console.log(`Redirect happened with state value: ${state}`);
  },
  scope: 'openid email profile offline_access'
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FusionAuthProvider {...config}>
        <App />
      </FusionAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
