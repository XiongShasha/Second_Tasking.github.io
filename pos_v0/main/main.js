'use strict';

function printReceipt(inputs) {
//#1.计算小计
  var per_Sum = new Array();
  for(var i=0;i<inputs.length;i++)
  {
   per_Sum[i]=(inputs[i].count)*(inputs[i].price);
  }
//#2.计算总金额
  var tol_Sum=0;
  for(var i=0;i<per_Sum.length;i++)
  {
    tol_Sum+=per_Sum[i];
  }
//#3.打印
var str='';
  for(var i=0;i<inputs.length;i++)
  {
    str+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
    inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)+'(元)'+'，小计：'+per_Sum[i].toFixed(2)+'(元)\n';
  }
    console.log('***<没钱赚商店>收据***\n'+str
    +'----------------------\n'+'总计：'+tol_Sum.toFixed(2)+'(元)\n'+'**********************');
}
