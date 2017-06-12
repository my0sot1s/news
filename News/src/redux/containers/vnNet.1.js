import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as _actions from '../actions/base'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Router from '../../modules/BaseRender'

const HotRoute = connect(state => ({ items: state.base.vn_net_hot.items }))(Router)
const LawRoute = connect(state => ({ items: state.base.vn_net_law.items }))(Router)
const TechRoute = connect(state => ({ items: state.base.vn_net_tech.items }))(Router)
const EconomiesRoute = connect(state => ({ items: state.base.vn_net_economies.items }))(Router)
const SportsRoute = connect(state => ({ items: state.base.vn_net_sports.items }))(Router)
const EducationsRoute = connect(state => ({ items: state.base.vn_net_educations.items }))(Router)
const LifeRoute = connect(state => ({ items: state.base.vn_net_life.items }))(Router)
const BDSRoute = connect(state => ({ items: state.base.vn_net_bds.items }))(Router)

class VnNet extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'vn_net_hot', title: 'Trang chủ', link: 'http://vietnamnet.vn/rss/home.rss' },
      { key: 'vn_net_law', title: 'Pháp luật', link: 'http://vietnamnet.vn/rss/phap-luat.rss' },
      { key: 'vn_net_tech', title: 'Công nghệ', link: '	http://vietnamnet.vn/rss/cong-nghe.rss' },
      { key: 'vn_net_economies', title: 'Kinh Doanh', link: 'http://vietnamnet.vn/rss/kinh-doanh.rss' },
      { key: 'vn_net_sports', title: 'Thể Thao', link: 'http://vietnamnet.vn/rss/the-thao.rss' },
      { key: 'vn_net_educations', title: 'Giáo dục', link: 'http://vietnamnet.vn/rss/giao-duc.rss' },
      { key: 'vn_net_life', title: 'Đời sống', link: 'http://vietnamnet.vn/rss/doi-song.rss' },
      { key: 'vn_net_bds', title: 'Bất động sản', link: 'http://vietnamnet.vn/rss/bat-dong-san.rss' },
    ],
  };
  componentDidMount() {
    this.props.actions.getAction(
      this.state.routes[0].link,
      this.state.routes[0].key);
  }

  handleChangeTab = index => {
    this.setState({ index, isLoading: true }, () =>
      this.props.actions.getAction(
        this.state.routes[index].link,
        this.state.routes[index].key));
  }
  renderHeader = props => <TabBar {...props}
    scrollEnabled={true}
    labelStyle={{ color: '#777' }}
    pressColor={'#4285f4'}
    style={{ backgroundColor: '#ffffff' }} />

  renderScene = SceneMap({
    'vn_net_hot': HotRoute,
    'vn_net_law': LawRoute,
    'vn_net_tech': TechRoute,
    'vn_net_economies': EconomiesRoute,
    'vn_net_sports': SportsRoute,
    'vn_net_educations': EducationsRoute,
    'vn_net_life': LifeRoute,
    'vn_net_bds': BDSRoute,
  });
  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: false })
  }

  render() {
    if (this.state.isLoading)
      return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text></View>)
    else
      return (
        <TabViewAnimated
          style={[{ flex: 1, marginTop: 10 }]}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onRequestChangeTab={this.handleChangeTab}
          lazy={true}
        />
      );
  }
}

export default connect(
  state => ({ data: state.base }),
  dispatch => ({ actions: bindActionCreators(_actions, dispatch) })
)(VnNet)
