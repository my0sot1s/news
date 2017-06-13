import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, ListView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as _actions from '../actions/base'
import Tabs, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Router from '../../modules/BaseRender'
import Screen from './danTri'

class VnNet extends Component {
  constructor() {
    super()
    this.state = {
      routers: [
        { _key: 'vn_net_hot', title: 'Trang chủ', link: 'http://vietnamnet.vn/rss/home.rss' },
        { _key: 'vn_net_law', title: 'Pháp luật', link: 'http://vietnamnet.vn/rss/phap-luat.rss' },
        { _key: 'vn_net_tech', title: 'Công nghệ', link: 'http://vietnamnet.vn/rss/cong-nghe.rss' },
        { _key: 'vn_net_economies', title: 'Kinh Doanh', link: 'http://vietnamnet.vn/rss/kinh-doanh.rss' },
        { _key: 'vn_net_sports', title: 'Thể Thao', link: 'http://vietnamnet.vn/rss/the-thao.rss' },
        { _key: 'vn_net_educations', title: 'Giáo dục', link: 'http://vietnamnet.vn/rss/giao-duc.rss' },
        { _key: 'vn_net_life', title: 'Đời sống', link: 'http://vietnamnet.vn/rss/doi-song.rss' },
        { _key: 'vn_net_bds', title: 'Bất động sản', link: 'http://vietnamnet.vn/rss/bat-dong-san.rss' },
      ],
    };
  }
  render() {
    return (
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: 'rgb(97,207,234)', height: 2 }}
        tabBarInactiveTextColor='rgb(175,184,187)'
        tabBarActiveTextColor='rgb(35, 52, 56)'
        tabBarTextStyle={{ fontSize: 15, fontWeight: 'bold' }}
        renderTabBar={() => <ScrollableTabBar style={{ borderColor: 'rgb(238, 244, 245)' }} />}
        style={{ marginTop: 3 }}>
        {this.state.routers.map((val, key) => {
          return (
            <Router tabLabel={val.title} {...val} key={key} />
          )
        })
        }
      </Tabs>
    );
  }
}

export default VnNet
// export default connect(
//   state => ({ data: state.base }),
//   dispatch => ({ actions: bindActionCreators(_actions, dispatch) })
// )(VnNet)