import type { NextPage } from "next";
import { Box, Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContract, useMetadata } from "@thirdweb-dev/react";
import { NFT_ADDRESS } from "../constant/addresses";
import NFTCard from "../components/NFTCard";

const Home: NextPage = () => {

  const { contract} = useContract(NFT_ADDRESS);
  const {data:metadata, isLoading: loadingMetadata} = useMetadata(contract);
  const collectionImage = metadata?.image;
  const collectionName = metadata?.name;

  return (
    
    <Container maxW={"1200px"} >
         {loadingMetadata? (
            <Flex h={"100vh"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Spinner/>
            </Flex>
          ):(
            <Container maxW={"1200px"} >
              <Box
                backgroundImage={`url(${collectionImage})`}
                h={"57vh"}
                p={8}
                borderRadius={8}
                maxW={"1400px"}
              >
                <Heading color={"white"}  >{collectionName}</Heading>
              </Box>
              <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={10} my={9} maxW={"6000"}>
                <NFTCard tokenId={"0"} />
                <NFTCard tokenId={"1"} />
                <NFTCard tokenId={"2"} />
                <NFTCard tokenId={"3"} />
                <NFTCard tokenId={"4"} />
                <NFTCard tokenId={"5"} />
                <NFTCard tokenId={"6"} />
                <NFTCard tokenId={"7"} />
                <NFTCard tokenId={"8"} />
              </Box>
            </Container>
          )}
    </Container> 
            
  );
};

export default Home;
