import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet, useContract } from "@thirdweb-dev/react";
import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react"
import { API_KEY, FACTORY_ADDRESS } from "../constant/addresses";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "PolygonZkevmTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="mumbai"
    supportedWallets={[
      smartWallet({
        factoryAddress: FACTORY_ADDRESS,
        thirdwebApiKey: API_KEY,
        gasless:true,
        personalWallets:[
          metamaskWallet(),
          localWallet()
        ]
      })
    ]}
    >
      <ChakraProvider>
        <Navbar/>

        <title> NFT Collections </title>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}



export default MyApp;
