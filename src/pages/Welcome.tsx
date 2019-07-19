import React from 'react';
import { withRouter } from 'react-router-dom';

import { Row, Col } from 'antd';
import Input from 'antd/es/input';
import Button from 'antd/es/button';

class TokpedTest extends React.PureComponent {
  state = {
    nominal: 0,
    sisa: 0,
    hasil: '',
    hideResult: true,
  };

  componentDidMount() {}

  handleHitung = () => {
    // contoh koin 1500
    // let result = ''
    let originalNum = this.state.nominal;
    let num = this.state.nominal;
    const arr = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];

    // 1000, 500
    const coins = [];
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

    const countResult = coins.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), Object.create(null));
    this.setState({
      hasil: countResult,
      sisa: sisa,
      hideResult: false,
    });

    return coins;
  };

  handleValidInput = (e: any) => {
    const nominal = e.target.value;
    this.setState({
      hideResult: true,
      nominal: nominal,
    });
  };

  render() {
    const { hasil, sisa, nominal, hideResult } = this.state;
    const array = Object.keys(hasil).reverse();
    return (
      <React.Fragment>
        <Row>
          <Col span={6}>
            <Input onKeyUp={e => this.handleValidInput(e)} />
          </Col>
          <Col span={2}>
            <Button type="dashed" onClick={this.handleHitung}>
              {' '}
              Hitung{' '}
            </Button>
          </Col>
        </Row>
        {!hideResult && (
          <Row>
            <Col>
              {nominal}
              <ul>
                {array.map(function(key, index) {
                  return (
                    <li key={index}>
                      {hasil[key]} X {key}
                    </li>
                  );
                })}
                {sisa !== 0 && <li>Sisa : {sisa} </li>}
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
