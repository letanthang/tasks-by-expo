
const nameInitialState = {
  tasks: [
    {
      taskID: 12,
      taskType: 'move',
      taskName: 'Đi lấy ĐH ABC123 trong trip XX',
      totalNum: 10,
      totalCOD: 100500,
      shopName: 'Shop UyenToys',
      address: '70 Lữ Gia, P.15, Q.10',
      orders: [
        {
          orderID: 1,
          orderCode: 'ABC',
          costCOD: 12000,
          weight: 100,
          length: 20,
          width: 20,
          height: 20
        },
        {
          orderID: 2,
          orderCode: 'BCD',
          costCOD: 15500,
          weight: 200,
          length: 20,
          width: 30,
          height: 30,
        }
      ]
    },
    {
      taskID: 34,
      taskType: 'move',
      taskName: 'Đi lấy ĐH JKH123 trong trip XY',
      totalNum: 15,
      totalCOD: 50500
    }
  ]
}

export default (state = nameInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
}
