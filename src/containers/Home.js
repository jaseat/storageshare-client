import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import LoginForm from './login/Login'
import { Parallax } from 'react-parallax'

const img = {
  storage: require('../components/Theme/img/storagespacejpg.jpg'),
  city: require('../components/Theme/img/citybw.jpeg'),
  map: require('../components/Theme/img/map.png'),
  shield: require('../components/Theme/img/shield.png'),
  savings: require('../components/Theme/img/savings.png')
}

const wHeight = window.innerHeight;

class Home extends Component {
  state = {
    value: 0
  };
  handleTabChange = (e, value) => {
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <Parallax
          blur={5}
          bgImage={img.storage}
          bhImageAlt='SacSkyline'
          strength={300}
        >
          <Grid container direction='row' justify='center' alignItems='flex-start' style={{ height: wHeight }}>
            <Grid item xs={6}>
              <Typography variant='display3' align='right' color='textSecondary'>
                Hello there!
          </Typography>
              <Typography variant='display1' align='right' color='textSecondary'>
                Sclique - Is your ultimate choice to store your items.
          </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='row' justify='flex-end' alignItems='flex-start'>
                <Grid item>
                  <LoginForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Parallax>
        <Parallax
          blur={2}
          bgImage={img.city}
          bhImageAlt='SacSkyline'
          strength={100}
        >
          <Grid container direction='row' spacing={40} alignItems='center' justify='center' style={{ height: wHeight }}>

                <Grid item xs={4}>
                  <Typography variant='display1' align='center' gutterBottom>
                  <img src={img.map} alt='boxes' style={{ maxWidth: 200}} />
                  <br/>
                    Find storage in seconds.
            </Typography>
                  <Typography variant='subheading' align='center'>
                    Fill up a form and find the storage near by in seconds,
                    or enter the zip code to look in the area. Yes is that easy -
                    request, store and repeat!
            </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='display1' align='center' gutterBottom>
                  <img src={img.shield} alt='boxes' style={{ maxWidth:200}} />
                  <br/>
                    We got you covered.
            </Typography>
                  <Typography variant='subheading' align='center'>
                    Having great coverage from our enterprise level scamsurance,
                    you can be assured that we got you covered if the things go south!
            </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='display1' align='center' gutterBottom>
                  <img src={img.savings} alt='boxes' style={{ maxWidth:200}} />
                  <br/>
                    Low-cost and flexibility.
            </Typography>
                  <Typography variant='subheading' align='center'>
                    You don't have to rent entire storage room to hold your favorite cup. Now its easy
                    to pack it up in the box, send and you will overpay just for that!
            </Typography>
                </Grid>
              </Grid>
        </Parallax>
      </div>
    )
  }
}

export default Home;