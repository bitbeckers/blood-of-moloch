import { useRouter } from "next/router";
import { useState } from "react";
import FixedBanner from "../components/FixedBanner";
import CenteredPanel from "../components/CenteredPanel";
import HexPanel from "../components/HexPanel";
import Footer from "../components/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Input,
  Button
} from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";
import { ethers } from "ethers";

export default function RedeemPage(props) {
  const router = useRouter();
  const { code } = router.query;

  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");


  const submitData = async () => {
    const data = {
        address, password
    };
    const options = {
        method: "POST",
        body: JSON.stringify(data)
    }
      const response = await fetch(`/api/code/${code}/claim`, options)

      console.log({response})
      console.log("reponse.json", await response.json());
  }
  

  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <CenteredPanel>
          <div>
            <Heading className={styles.heading}>
              CLAIM YOUR{" "}
              <span
                style={{
                  fontFamily: `'futura-pt-bold', sans-serif`,
                  fontWeight: `700`,
                  color: `#E0232C`,
                }}
              >
                NFT.
              </span>
            </Heading>
            <HexPanel>
              <>
                <div>
                  <Heading>How to claim:</Heading>
                  <OrderedList>
                    <ListItem>
                      Enter your public address and secret password.
                    </ListItem>
                    <ListItem>Hit Claim.</ListItem>
                    <ListItem>Welcome to Web3.</ListItem>
                  </OrderedList>
                </div>
                <div
                  style={{
                    display: `flex`,
                    gap: `1rem`,
                    flexDirection: `column`,
                  }}
                >
                  <div>
                    <Text>Enter Public Address</Text>
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      sx={{ minWidth: `40vw`, width: `100%` }}
                    />
                    {(address.length > 0 && !(ethers.utils.isAddress(address))) ? <Text color='red'>Not a valid address</Text> : null}
                  </div>
                  <div>
                    <Text>Enter Secret Password</Text>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ minWidth: `40vw`, width: `100%` }}
                    />
                  </div>
                  <Button
                    sx={{
                      padding: `2ex 2em`,
                      margin: `1ex 0`,
                      backgroundColor: `#E0232C`,
                      color: `white`,
                      textAlign: `center`,
                      borderRadius: `6px`,
                    }}
                    onClick={() => submitData()}
                  >
                    Claim
                  </Button>
                </div>
              </>
            </HexPanel>
          </div>
        </CenteredPanel>
      </Box>
      <Footer />
    </>
  );
}
