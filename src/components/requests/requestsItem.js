import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from "../icon";
import Button from "../button";

import { ROOT_URL } from '../../config';

class RequestsItem extends Component {
  constructor() {
    super();
    this.state = {
      height: 0
    };
  }

  toggleDropdown = () => {
    var element = document.getElementById(`${this.props._id}-requests-item`);
      if(this.state.height == 0) {
          element.classList.add('bg-e6');
          this.setState({height: 'auto'});
      } else {
          element.classList.remove('bg-e6');
          this.setState({height: 0});
      }
  }

  handleStatus = () => {
    const { _id, status } = this.props;
    this.props.changeStatus({_id, status}, () => {
      this.props.fetchRequests();
    })
  }

  render() {
    const { _id, title, body, date, imageUrl, status } = this.props;
    const parsedDate = new Date(date);

    var moveButtonIcon = "fas fa-wrench";
    var mainIcon = "fas fa-exclamation-triangle"
    if (status == 'in-progress') {
      moveButtonIcon = 'fas fa-check-square'
      mainIcon = 'fas fa-wrench'
    } else if (status == 'complete') {
      moveButtonIcon = 'fas fa-exclamation-triangle'
      mainIcon = 'fas fa-check-square'
    }
    return (
      <div id={`${_id}-requests-item`} className="requests-item">
        <Icon
          className="requests-item__icon"
          icon={mainIcon}
        />
        <div className="requests-item__title">
          <div className="requests-item__title__text">{title}</div>
          <Icon
            callback={() => this.toggleDropdown()}
            className="requests-item__title__arrow"
            icon="fas fa-sort-down"
          />
        </div>
        <div className="requests-item__tenant-unit">{`${_id} - Unit 115`}</div>
        <div className="requests-item__date">
          {parsedDate.getMonth() + 1}
          /
          {parsedDate.getDate()}
          /
          {parsedDate.getFullYear() - 2000}
        </div>
        <Button
          className="requests-item__move"
          callback={() => this.handleStatus()}
          icon={moveButtonIcon}
        />

        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="item-description">
              <img
                src={`${ROOT_URL}/${imageUrl}`}
                className="item-description__img"
              />
              <p className="item-description__text">
                {body}
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RequestsItem);
