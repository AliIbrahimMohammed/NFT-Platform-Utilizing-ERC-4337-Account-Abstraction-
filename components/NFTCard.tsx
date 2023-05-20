import { Avatar, Box, Container, Flex, Heading, Menu, MenuButton, MenuItem,MenuList,Text, useToast } from "@chakra-ui/react";
import { Web3Button,useAddress,useDisconnect,useContract,useNFT } from "@thirdweb-dev/react";
import { NFT_ADDRESS } from "../constant/addresses";

type Props = {
    tokenId: string;
};

const NFTCard: React.FC<Props> = ({tokenId})=>{

    const address = useAddress();
    const {contract} = useContract(NFT_ADDRESS);
    const {data} = useNFT(contract,tokenId);
    const toast = useToast();
    

    return(
        <Box
        backgroundImage={`url(${data?.metadata.image})`}
        backgroundSize={"cover"}
        h={"60vh"}
        borderRadius={8}
        p={1}
        >
            <Flex h={"100%"} direction={"column"} justifyContent={"space-between"}>
                <Heading color={"white"}>{data?.metadata.name}</Heading>
                {!address?(
                    <Text color={"black"} fontWeight={"black"}>Sign in to claim NFT</Text>
                ):(
                 <Web3Button
                    contractAddress={NFT_ADDRESS}
                    action={(contract)=> contract.erc1155.claim(tokenId,1)}
                    onSuccess={()=>
                        toast({
                            title: 'Claim Completed.',
                            description: "your NFT has been Claimed",
                            status: 'success',
                            duration:9000,
                            isClosable:true,
                        })
                    }
                 >Claim NFT</Web3Button>   
                )}
            </Flex>
        </Box>
    )
};

export default NFTCard;


