import React, { Component } from 'react';
import { AppBar, Tab, Tabs, Card, CardContent, Typography, Button } from '@material-ui/core';
import { FaCity, FaDownload, FaFacebook, FaIcons, FaImage, FaInstagram, FaLocationArrow, FaMailBulk, FaMap, FaPhone, FaPlus, FaTrash, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBeer } from "react-icons/fa";
import {GoKey, GoAlertFill, GoShieldCheck, GoSync, GoChevronDown, GoCheckbox  } from "react-icons/go";
import {GiCircularSawblade } from "react-icons/gi";

const tabsData1 = [
  { label: 'Early', title: "Trade: Earn 300M $DOOR !", content: 'Discover Tradoor: Earn big $DOOR rewards for trades, referrals, liquidity and feeding the bull !' , image: "https://fan-ton.com/wp-content/uploads/2024/05/COVER-1024x576.jpg"},
];

const tabsData2 = [
    { label: 'Early', title: "Trade: Earn 300M $DOOR !", content: 'Discover Tradoor: Earn big $DOOR rewards for trades, referrals, liquidity and feeding the bull !' , image: "https://fan-ton.com/wp-content/uploads/2024/05/COVER-1024x576.jpg"},
    { label: 'Featured', title: "Launch with Notcoin", content: 'Submit project for Notcoin Explore.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQePG8HgyJ7Ii7d8CFdHcJsdryUVjx31NlQ&s"},
    { label: 'Watched', title: "Launch with Notcoin", content: 'Submit project for Notcoin Explore.', image: "https://nairametrics.com/wp-content/uploads/2024/05/notcoin-1.jpg" },
  ];

class BitcoinAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({ selectedTab: newValue });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{width: '40%', textAlign: "center",  marginBottom: '10px', marginTop: '10px' }}>
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              Campaigns
            </Typography>
        </Card>
        
        <Card style={{ marginBottom: '10px', width: '100%' }}>
          <CardContent>
            <Link to="/test">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQePG8HgyJ7Ii7d8CFdHcJsdryUVjx31NlQ&s"} alt="Phone" 
                style={{maxWidth: '100%', width: '100%', borderRadius: '20px'}} />
            </Link>
            
            <Card style={{textAlign: "left",  marginBottom: '10px', marginTop: '10px', padding: '15px'}}>
              <Typography variant="h5" style={{ marginTop: '10px' }}>
                Start your campaign <GoAlertFill size={30} style={{color: 'black',marginLeft: '25px'}} />
              </Typography>
              <Typography variant="h7" style={{ marginTop: '10px' }}>
                Rewards with notcoin, try for now ....
              </Typography>
            </Card>

            <Typography variant="h5" style={{ marginTop: '30px' }}>
              Launch with Notcoin
            </Typography>

            <Typography variant="h6" style={{ marginTop: '10px' }}>
              <GoAlertFill size={25} style={{color: '#d1d114',marginRight: '15px'}} />Notcoin
              <GoShieldCheck size={20} style={{color: '#1d7af3', marginLeft: '10px'}} />
            </Typography>

            <Typography variant="h7" style={{ marginTop: '10px' }}>
              Submit your project for Notcoin Explore.
            </Typography>

            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Hey
            </Typography>

            <Card style={{textAlign: "left",  marginBottom: '10px', marginTop: '10px', padding: '15px'}}>
              <Typography variant="h5" style={{ marginTop: '10px' }}>
                <GoCheckbox size={22} style={{color: '#1d7af3', marginLeft: '10px'}}/>  What's Notcoin Explore
              </Typography>
            </Card>

            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Submit your project
            </Typography>

            <Card style={{textAlign: "left",  marginBottom: '10px', marginTop: '10px', padding: '15px'}}>
              <Typography variant="h5" style={{ marginTop: '10px' }}>
               <GoKey size={22} style={{color: '#1d7af3', marginRight: '10px'}}/>Connect wallet
              </Typography>
            </Card>

            <Card style={{textAlign: "left",  marginBottom: '10px', marginTop: '10px', padding: '15px'}}>
              <Typography variant="h5" style={{ marginTop: '10px' }}>
                <GoKey size={22} style={{color: '#1d7af3', marginRight: '10px'}}/>Hold at least 130 TON
              </Typography>

              <Typography variant="h7" style={{ marginTop: '10px' }}>
                Simple verification to get access
              </Typography>
            </Card>

            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Get more info
            </Typography>

            <Card style={{textAlign: "left",  marginBottom: '10px', marginTop: '10px', padding: '15px'}}>
              <Typography variant="h5" style={{ marginTop: '10px' }}>
              <GoKey size={22} style={{color: '#1d7af3', marginRight: '10px'}}/>Join partners channel
              </Typography>

              <Typography variant="h7" style={{ marginTop: '10px' }}>
                Updates, beta features, special offers
              </Typography>
            </Card>
      
           
          </CardContent>
        </Card>
        
      </div>
    );
  } 
}
 
export default BitcoinAds;
