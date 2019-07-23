import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  Tabs,
  Form,
  Input,
  message,
  Button,
  Row,
  Col,
  Checkbox,
} from 'antd';


const TabPane = Tabs.TabPane;

class Portofolio extends React.PureComponent {
  state = {
    nominal: 0,
    sisa: 0,
    hasil: '',
    visibleModal: false,
    hideResult: true,
    invalidInput: [],
    coinList: [],
  };

  componentDidMount() {
    console.log(
      'Please contact  Me \n Hasim Imahdudin \n hasim.blogger@gmail.com, hasim.imahdudin@gmail.com \n 085642856762 :) ',
    );
  }

  callback = (key: any) => {
    console.log(key);
  }

  renderFakta = () => {
    return (
      <Row>
        <Col span={10}>
          <iframe src={'https://fakta.babe.news'} width="450px"
                  height="550px"></iframe>
        </Col>
        <Col span={10} offset={2}>
          <h1>Fakta Babe</h1>
          <p>Adalah web cek fakta di aplikasi babe, berisi list artikel yang telah di cek kebenarannya oleh pihak
            content ops</p>
          <p>Jika list artikel di klik maka akan menuju ke detail artikel (deeplink), hanya dapat dilihat dari dalam
            aplikasi</p>
          <p>Menggunakan redis untuk penyimpanan data sementara</p>
        </Col>
      </Row>
    );
  }

  airQuality = () => {
    return (
      <Row>
        <Col span={10}>
          <iframe src={'http://site.babe.news/air-quality/'} width="450px"
                  height="550px"></iframe>
        </Col>
        <Col span={10} offset={2}>
          <h1>BaBe Air Quality</h1>
          <p>Adalah Webview di aplikasi babe untuk menunjukkan kondisi udara di beberapa wilayah indonesia</p>
          <p>Menggunakan redis untuk penyimpanan data sementara</p>
        </Col>
      </Row>
    );
  }

  shareArticle = () => {
    return (
      <Row>
        <Col span={10}>
          <iframe
            src={'https://www.babe.news/amp/article/i6714513266510397953?app_id=1124&share_from=newfeed&language=id'}
            width="450px"
            height="550px"></iframe>
        </Col>
        <Col span={10} offset={2}>
          <h1>BaBe Article Share page</h1>
          <p>Adalah Website share artikel, digunakan untuk landing halaman share dari aplikasi Babe</p>
        </Col>
      </Row>
    );
  }
  hotTopicSharePage = () => {
    return (
      <Row>
        <Col span={10}>
          <iframe src={'https://www.babe.news/hot-topic/i6716334044533030913?app_id=1124&language=id&region=id&topic_id=6716334044533030913&impr_id=6716723690840639746&gid=6716340616512405761&c=sys'} width="450px"
                  height="550px"/>
        </Col>
        <Col span={10} offset={2}>
          <h1>BaBe Hot Topic Share page</h1>
          <p>Adalah Website share Hot topi, digunakan untuk landing halaman share Hot Topic dari aplikasi Babe</p>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Summary" key="1">
          <React.Fragment>
            <h1>Language : NodeJs</h1>
            <h1>View Lib : ReactJs</h1>
            <h1>Framework : QuickSilver & KOA</h1>
            <h1>Database : Mysql, Redis, Kafka</h1>
          </React.Fragment>
        </TabPane>
        <TabPane tab="Fakta BaBe" key="2">
          {this.renderFakta()}
        </TabPane>
        <TabPane tab="BaBe Air Quality" key="3">
          {this.airQuality()}
        </TabPane>
        <TabPane tab="BaBe Article Share" key="4">
          {this.shareArticle()}
        </TabPane>
        <TabPane tab="BaBe Hot Topic Share Page" key="5">
          {this.hotTopicSharePage()}
        </TabPane>
      </Tabs>
    );
  }
}

// @ts-ignore
export default withRouter(Portofolio);
