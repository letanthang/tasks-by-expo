
const nameInitialState = {
  tasks: [
    {
      taskID: 12,
      taskType: 'pick',
      taskName: 'Đi lấy ĐH ABC & BCD trong trip XX',
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
      taskID: 23,
      taskType: 'check',
      taskName: 'Bắn kiểm ĐH ABC123 vào rổ A1',
      order: {
        orderID: 2,
        orderCode: 'ABC123',
        costCOD: 15500,
        weight: 200,
        length: 20,
        width: 30,
        height: 30,
      },
      positionCode: 'B12-3-4'
    },
    {
      taskID: 34,
      taskType: 'receive',
      taskName: 'Nhận bàn giao ĐH ABC123 ở rổ C3',
      order: {
        orderID: 2,
        orderCode: 'ABC123',
        costCOD: 15500,
        weight: 200,
        length: 20,
        width: 30,
        height: 30,
      },
      positionCode: 'B12-3-4'
    },
    {
      taskID: 45,
      taskType: 'deliver',
      taskName: 'Đi giao ĐH ABC123 trong trip XX',
      totalNum: 10,
      totalCOD: 100500,
      shopName: 'Shop UyenToys',
      address: '70 Lữ Gia, P.15, Q.10',
      orders: [
        {
          orderID: 1,
          orderCode: 'ABC123',
          costCOD: 12000,
          weight: 100,
          length: 20,
          width: 20,
          height: 20
        }
      ]
    },
  ]
}

export default (state = nameInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
}
