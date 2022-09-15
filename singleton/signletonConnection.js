
let address;

const Connection = {
  connect(address) {
    address = address;
    console.log(address);
  },
  close() {
    console.log(`${address} disconnect`);
  }
}

export default Object.freeze(Connection);
