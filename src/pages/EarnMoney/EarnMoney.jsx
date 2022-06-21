import React from "react";
import { ListItem, UnorderedList,Button, } from "@chakra-ui/react";
import style from "./EarnMoney.module.css";
import{Link} from 'react-router-dom'
import { useSelector } from "react-redux";


const EarnMoney = () => {
  const {auth}= useSelector(state=>state.auth);
  console.log(auth);
  return (
    <div className={style.smrEarnmoneyDiv}>
      <h1>Earn Money Online | Working from Home</h1>
      <div className={style.smrMainContainer}>
        <div>
          <div className={style.smrNumber}>
            1
          </div>

          <h2>Upload Products that you have!</h2>
          <div className={style.smrULList}>
            <UnorderedList>
              <ListItem>Create your Account by clicking here</ListItem>
              <ListItem>Verify your account</ListItem>
              <ListItem>Go to dashboard</ListItem>
              <ListItem>
                Pick any product. For example book, or any item
              </ListItem>
              <ListItem>Search for it in the Database</ListItem>
              <ListItem>If it is available, upload a photograph.</ListItem>
              <ListItem>Please mention the price you bought it at</ListItem>
            </UnorderedList>
          </div>
        </div>
        <div>
          <div className={style.smrNumber}>
            2
          </div>
          <h2>Provide a brief description of how to use!</h2>
          <div className={style.smrULList}>
            <UnorderedList>
              <ListItem>Describe the product you just uploaded</ListItem>
              <ListItem>
                Mention from where you bought it, online or offline
              </ListItem>
              <ListItem>
                A Video increases your chances of getting a product approved,
                but it is not mandatory to upload videos.
              </ListItem>
            </UnorderedList>
          </div>
        </div>
        <div>
          <div className={style.smrNumber}>
            3
          </div>
          <h2>On Approval get scratch cards and earn money!</h2>
          <div className={style.smrULList}>
            <UnorderedList>
              <ListItem>We will review products, you have uploaded.</ListItem>
              <ListItem>
                On approval you will get a scratch card, which can be money or
                coupon code.
              </ListItem>
              <ListItem>
                Make sure you provide the correct bank details or UPI Id, to
                which you want the money to transfer
              </ListItem>
            </UnorderedList>
          </div>
        </div>
      </div>
      <div className={style.smrGuideVideo}>
        <iframe
          width="1140"
          height="642"
          src="https://www.youtube.com/embed/TfQyg-DSHBo"
          title="Earn Money Online | Work from Home | Ideakart"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> 
        
      </div>
      <Button as={Link} colorScheme='blue' to={auth?'/dashboard':'/login'} marginLeft='45%' marginTop='10px' >Get started!</Button>
    </div>
  );
};

export default EarnMoney;
