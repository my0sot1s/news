import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, ListView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as _actions from '../actions/base'
import Tabs, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Router from '../../modules/BaseRender'
import Screen from './danTri'

class VnExpress extends Component {
  constructor() {
    super()
    this.state = {
      routers: [
        { _key: 'hot', title: 'Hot', link: 'http://vnexpress.net/rss/tin-moi-nhat.rss' },
        { _key: 'news', title: 'Thời Sự', link: 'http://vnexpress.net/rss/thoi-su.rss' },
        { _key: 'world', title: 'Thế giới', link: 'http://vnexpress.net/rss/the-gioi.rss' },
        { _key: 'economies', title: 'Kinh Doanh', link: 'http://vnexpress.net/rss/kinh-doanh.rss' },
        { _key: 'sports', title: 'Thể Thao', link: 'http://vnexpress.net/rss/the-thao.rss' },
        { _key: 'educations', title: 'Giáo dục', link: 'http://vnexpress.net/rss/giao-duc.rss' },
        { _key: 'scientics', title: 'Khoa học', link: 'http://vnexpress.net/rss/khoa-hoc.rss' },
        { _key: 'stores', title: 'Tâm sự', link: 'http://vnexpress.net/rss/tam-su.rss' },
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

export default VnExpress
// export default connect(
//   state => ({ data: state.base }),
//   dispatch => ({ actions: bindActionCreators(_actions, dispatch) })
// )(VnExpress)