import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableHighlight, Modal, WebView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('screen')

const shadow = {
  shadowOffset: {
    width: 0.75,
    height: 0.75,
  },
  shadowColor: 'rgb(155, 158, 163)',
  shadowOpacity: 1.0,
}

class NodeItem extends Component {
  constructor(props) {
    super(props)
    this.image = /src=\"([^(\")]*)/.exec(this.props.data.content)
    this.infor = /<\/a>(.*)$/.exec(this.props.data.content) || ''
  }
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={[shadow, { height: 0.32 * height, margin: 3 }]}>
        <TouchableHighlight style={{ margin: 5 }}
          onPress={this.setModalVisible.bind(this, true)}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {this.props.data.title}</Text>
        </TouchableHighlight>
        <Text style={{ fontSize: 13, color: 'rgb(140, 142, 145)', marginBottom: 5, marginLeft: 3 }}>{this.props.data.pubDate}</Text>
        <Image
          source={{ uri: this.image[1] }}
          resizeMode='cover'
          style={{ width: 100 + '%', height: 0.28 * height }} />
        <Text style={{ fontSize: 14 }}>{this.infor[1]}</Text>


        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{ flex: 1, marginTop: 10 }}>
            <View style={{ height: 0.05 * height, display: 'flex', flexDirection: 'row-reverse' }}>
              <Ionicons size={35} onPress={this.setModalVisible.bind(this, false)} name="ios-close"
                style={{ flex: 1, textAlign: 'right', marginRight: 15 }} />
            </View>
            <WebView
              source={{ uri: this.props.data.link }}
              style={{ height: 0.9 * height, width, marginTop: 5 }} />
          </View>
        </Modal>
      </View>
    );
  }
}

export default NodeItem


