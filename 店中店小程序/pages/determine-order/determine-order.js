// pages/determine-order/determine-order.js
Page({

   
  data: {
    order_list:[{
      url:'../../img/item3.jpg',
      name:'法式面包',
      price:'15.00',
      num:'X1'
    },
      {
        url: '../../img/item3.jpg',
        name: '法式面包',
        price: '15.00',
        num: 'X1'
      }
    ],
    array: ['到店消费', '门店消费'],
    index: 0,
  },
  //  点击门店组件确定事件  
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }  

})