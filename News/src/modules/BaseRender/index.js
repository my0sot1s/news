import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ListNode from '../ListNode'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as _actions from '../../redux/actions/base'

class Router extends Component {
  state = {
    isLoad: true,
    items: []
  }
  componentDidMount() {
    const { _key, link } = this.props
    this.props.actions.getAction(link, _key)
  }
  componentWillReceiveProps(nextProps) {
    debugger
    this.setState({ items: nextProps.base[this.props._key].items, isLoad: false });
  }

  render() {
    if (this.state.isLoad)
      return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} key={this.props.key}>
        <Text>Loading...</Text></View>)
    else
      return (
        <View style={{ flex: 1 }} key={this.props.key}>
          <ListNode data={this.state.items} />
        </View>
      );
  }
}

export default connect(state => ({
  base: state.base
}), dispatch => ({
  actions: bindActionCreators(_actions, dispatch)
}))(Router)