# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

### Start project

```bash
npm start
```

### How To Use
- Select the coin to be used, by default all coin are selected
- Enter the nominal according to the format, if it does not match it will be an error
  - Examples of valid inputs with their canonical equivalents 18.215 (18215), Rp17500 (17500), Rp17.500,00 (17500), Rp 120.325 (120325), 005.000 (5000), 001000 (1000)
  - Examples of invalid inputs: 17,500 (invalid separator),  2 500(invalid separator), 3000 Rp (valid character in wrong position), Rp (missing value)
- Hit Enter / Click Calculate button
  - ex: 
      - 15000 = 1 x Rp10000, 1x Rp5000
      - Rp3900 = 1x Rp2000, 1x Rp1000, 1x Rp500, 4x Rp100
      - 12510 = 1 x Rp10000, 1x Rp2000, 1x Rp500, left Rp10 (no available fraction)
