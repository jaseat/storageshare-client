import React, { Component } from "react";
//material-ui
import Typography from "material-ui/Typography";
//animation
import SwipeableViews from "react-swipeable-views";
// import { Stepper, Step, StepLabel} from 'material-ui/Stepper - for future
//custom
import NewBoxForm from "../../containers/Renter/NewBoxForm";
import NewItem from "./NewItem";
//
class NewRentalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      swipeableIndex: 0,
      boxId: null
    };
  }
  _saveBoxId = id => {
    this.setState({ boxId: id });
  };

  _handleNextIndex = () => {
    this.setState({ swipeableIndex: this.state.swipeableIndex + 1 });
  };

  render() {
    return (
      <div>
        <br />
        <SwipeableViews
          axis="x"
          index={this.state.swipeableIndex}
          onChangeIndex={this._handleIndexChange}
        >
          <div>
            <Typography variant="display1" align="center" gutterBottom>
              Lets start from creating the box!
            </Typography>
            <NewBoxForm
              boxId={this._saveBoxId}
              nextSlide={this._handleNextIndex}
            />
          </div>
          <div>
            <Typography variant="display1" align="center" gutterBottom>
              Now lets put some items in our box.
            </Typography>
            <NewItem
              boxId={this.state.boxId}
              nextSlide={this._handleNextIndex}
            />
          </div>
          <div>
            <Typography variant="display1" align="center" gutterBottom>
              Here are the storages available near by
            </Typography>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default NewRentalPage;
