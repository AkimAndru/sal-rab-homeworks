// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let data = {client: {name, phone}, order: {address, sum}, goods:[]};
    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i +=1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
    }
    data.order.address = "ул. " + address.street + ", дом "+ address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, " + "кв. " + address.flat;    
    data.order.sum = sum;
    let clientText = name +` `+ phone;
    data.client = `${clientText}`;
    let jsonData = JSON.stringify({data});
    return jsonData;
}  