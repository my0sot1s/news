import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, ListView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as _actions from '../actions/base'
import Tabs, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Router from '../../modules/BaseRender'
import Screen from './danTri'

class DanTri extends Component {
  constructor() {
    super()
    this.state = {
      routers: [
        { _key: 'dan_tri_hot', title: 'Trang chủ', link: 'http://dantri.com.vn/trangchu.rss' },
        { _key: 'dan_tri_heal', title: 'Sức khỏe', link: 'http://dantri.com.vn/suc-khoe.rss' },
        { _key: 'dan_tri_xh', title: 'Xã hội', link: 'http://dantri.com.vn/xa-hoi.rss' },
        { _key: 'dan_tri_gt', title: 'Giải trí', link: 'http://dantri.com.vn/giai-tri.rss' },
        { _key: 'dan_tri_sports', title: 'Thể Thao', link: 'http://dantri.com.vn/the-thao.rss' }
        // { _key: 'dan_tri_love', title: 'Tình yêu', link: 'http://dantri.com.vn/tinh-yeu-gioi-tinh.rss' },
        // { _key: 'dan_tri_kd', title: 'Kinh doanh', link: 'http://dantri.com.vn/kinh-doanh.rss' },
        // { _key: 'dan_tri_pl', title: 'Pháp luật', link: 'http://dantri.com.vn/phap-luat.rss' },
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

export default DanTri
// export default connect(
//   state => ({ data: state.base }),
//   dispatch => ({ actions: bindActionCreators(_actions, dispatch) })
// )(VnNet)