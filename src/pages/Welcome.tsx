import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Form,
  Input,
  Select,
  message,
  Modal,
  Table,
  Button,
  Cascader,
  Row,
  Col,
  Tooltip,
  Icon,
  InputNumber,
} from 'antd';

const FormItem = Form.Item;

@Form.create()
class TokpedTest extends React.PureComponent {
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
    this.setState({
      coinList: [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50],
    });
    console.log(
      'Please contact  Me \n Hasim Imahdudin \n hasim.blogger@gmail.com, hasim.imahdudin@gmail.com \n 085642856762 :) ',
    );
  }

  processCalculate = () => {
    // contoh koin 1500
    const originalNum = this.state.nominal;
    let num = this.state.nominal;
    const arr = this.state.coinList;

    // 1000, 500
    const coins: any = [];
    let sumNominal = 0;
    let sisa = 0;

    for (let i = 0; i < arr.length; i++) {
      // jika nilai awal > koin array ke i maka true
      // while ke 1 = 1500 >= 2000 false
      while (num >= arr[i]) {
        coins.push(arr[i]);
        num = num - arr[i];
      }
    }

    let current = null;
    let cnt = 0;
    for (let i = 0; i < coins.length; i++) {
      // @ts-ignore
      if (coins[i] != current) {
        if (cnt > 0) {
          sumNominal = sumNominal + (current || 0);
        }
        current = coins[i];
        cnt = 1;
      } else {
        sumNominal = sumNominal + (current || 0);
        cnt++;
      }
    }

    if (cnt > 0) {
      sumNominal = sumNominal + (current || 0);
    }

    if (originalNum > sumNominal) {
      sisa = originalNum - sumNominal;
    }

    const countResult = coins.reduce(
      (a: any, c: any) => ((a[c] = (a[c] || 0) + 1), a),
      Object.create(null),
    );
    this.setState({
      hasil: countResult,
      sisa: sisa,
      hideResult: false,
    });
  };

  handleSubmit = e => {
    let _this = this;
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        _this.processCalculate();
      }
    });
  };

  inputValidator = (rules: any, value: any, callback: any) => {
    if (value) {
      const nominal = value;
      if (nominal.match(/^[a-z|A-Z|0-9]+\s?Rp|\sRp.{1}$/gm)) {
        callback('valid character in wrong position');
      } else if (nominal.match(/([0-9])\s|,([0-9])/gm)) {
        callback('invalid separator');
      } else if (nominal.match(/^(Rp|RP)\s(?!\d)/gm)) {
        callback('missing value');
      } else {
        this.setState({
          hideResult: false,
          nominal: nominal.replace(/\D/g, ''),
        });
        callback();
      }
    } else {
      callback();
    }
  };

  updateCoinList = (idx: any, e: any) => {
    console.log(idx, e.target.value);
    const value = e.target.value;
    this.setState({
      coinList: value,
    });
  };

  render() {
    const { hasil, sisa, nominal, hideResult, coinList } = this.state;
    const array = Object.keys(hasil).reverse();
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <Row>
          {coinList.map((val, idx) => {
            return (
              <Col span={4} key={idx}>
                <Input defaultValue={val} onKeyUp={e => this.updateCoinList(idx, e)} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Form onSubmit={this.handleSubmit} className="test-web-form">
            <Col span={6}>
              <Form.Item>
                {getFieldDecorator('nominal', {
                  rules: [
                    { required: true, message: 'Please input Nominal!' },
                    {
                      validator: this.inputValidator,
                    },
                  ],
                })(<Input placeholder="Nominal" />)}
              </Form.Item>
            </Col>
            <Col span={6} offset={1}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Calculate
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
        {!hideResult && (
          <Row>
            <Col>
              {nominal}
              <ul>
                {array.map(function(key, index) {
                  return (
                    <li key={index}>
                      {hasil[key]} X Rp{key}
                    </li>
                  );
                })}
                {sisa !== 0 && <li>no available fraction : {sisa} </li>}
              </ul>
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

// @ts-ignore
export default withRouter(TokpedTest);
