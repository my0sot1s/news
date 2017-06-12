import React, { Component } from 'react';
import { View, Text, ListView, ScrollView } from 'react-native'

import Node from '../Node'

class ListNode extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    };

  }
  renderRow(row, sectionId, rowId) {
    return (
      <Node data={row} key={rowId} />
    )
  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

export default ListNode