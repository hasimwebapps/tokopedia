import React from 'react';
import { withRouter } from "react-router-dom";

import {
  Tabs
} from 'antd';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Input from "antd/es/input";
import Button from "antd/es/button";
import {summarizers} from "istanbul-lib-report";

const TabPane = Tabs.TabPane;

class CRMCreators extends React.PureComponent {
  state = {
    nominal: 0,
    hasil: ''
  };

  componentDidMount() {

  }

  handleHitung = () => {
    // contoh koin 1500
    // let result = ''
    let originalNum = this.state.nominal;
    let num = this.state.nominal;
    const arr = [2000, 1000, 500, 200, 100,
      50, 20, 10, 5] ;
    const hasil = []

    // 1000, 500

    const coins = [];
    let sumNominal = 0;


    for (let i = 0; i < arr.length; i++) {
      // jika nilai awal > koin array ke i maka true
      // while ke 1 = 1500 >= 2000 false
      while (num >= arr[i]) {
        coins.push(arr[i]);
        hasil.push(arr[i]);
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
          hasil[i] = (cnt + ' X ' + current)
          console.log(cnt + ' X ' + current);
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
      console.log(cnt + ' X ' + current);
    }


    if (originalNum > sumNominal) {
      console.log(originalNum - sumNominal + ' gak ada')
    }

    return coins;
  }

  handleValidInput = (e) => {
    const nominal = e.target.value;
    this.setState({
      nominal: nominal
    })



        //
        // this.setState({
        //   duaRibu: noteCounter[0],
        //   seribu: noteCounter[1],
        //   limaRatus: noteCounter[2],
        //   duaRatus: noteCounter[3],
        // });


    // const cents = e.target.value;
    // let counts = [0,0,0,cents]
    // let denominations = [2000,1000,500]
    // let i = 0;
    // for (i = 0; i < 3; i++){
    //   counts[i] = Math.floor(counts[3]/denominations[i])
    //   counts[3] -= counts[i]*denominations[i]
    // }
    // console.log(`Quarters: ${denominations[0]}, Dimes: ${denominations[1]}, Nickels: ${denominations[2]}, Pennies: ${denominations[3]}`)
    // this.setState({
    //   tab: `Quarters: ${denominations[0]}, Dimes: ${denominations[1]}, Nickels: ${denominations[2]}, Pennies: ${denominations[3]}`
    // });
    // return
    // let amount = e.target.value;
    //
    // const notes = [2000, 500, 200, 100,
    //   50, 20, 10, 5, 1] ;
    // const noteCounter = [0, 0, 0, 0, 0,
    //   0, 0, 0, 0]
    // ;

    // count notes using Greedy approach
    // let i = 0
    // for (i = 0; i < 9; i++) {
    //   if (amount >= notes[i]) {
    //     noteCounter[i] = amount / notes[i];
    //     amount = amount - noteCounter[i] * notes[i];
    //   }
    // }
    //
    // // Print notes
    // console.log("Currency Count ->");
    // for (i = 0; i < 9; i++) {
    //   if (noteCounter[i] != 0) {
    //     console.log(notes[i] + " : "
    //       + noteCounter[i]);
    //   }
    // }
    // const angka = e.target.value;
    // let number_string = angka.replace(/[^,\d]/g, '').toString(),
    //   split   		= number_string.split(','),
    //   sisa     		= split[0].length % 3,
    //   rupiah     		= split[0].substr(0, sisa),
    //   ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
    //
    // // tambahkan titik jika yang di input sudah menjadi angka ribuan
    // if(ribuan){
    //   let separator = sisa ? '.' : '';
    //   rupiah += separator + ribuan.join('.');
    // }
    //
    // rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    //
    // this.setState({
    //   tab: prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '')
    // });
  }

  /* Fungsi formatRupiah */

  render() {
    return (
     <Row>
       <Col span={6}>
          <Input onKeyUp={(e) => this.handleValidInput(e)} />
         <Button type="dashed" onClick={this.handleHitung}> Hitung </Button>
         {/*{this.state.duaRibu}-*/}
         {/*{this.state.seribu}-*/}
         {/*{this.state.limaRatus}-*/}
         {/*{this.state.duaRatus}-*/}
         {/*{this.state.seratus}-*/}
       </Col>
     </Row>
    )}
}

export default withRouter(CRMCreators)
