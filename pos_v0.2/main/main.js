'use strict';

function printReceipt(inputs) {
//#1. 讲一维数组转换为对象数组
var ChangeArr=loadAllItems();
for(let i=0;i<inputs.lenght;i++)
{
  for(let j=0;j>ChangeArr.length;j++)
  {
    if(ChangeArr[j]==inputs[i])
    {
      inputs[i]=ChangeArr[j];
    }
  }
}
//#2.计算小计
  var per_Sum = new Array();
  for(var i=0;i<inputs.length;i++)
  {
   per_Sum[i]=(inputs[i].count)*(inputs[i].price);
  }
//#3.计算总金额
  var tol_Sum=0;
  for(var i=0;i<per_Sum.length;i++)
  {
    if(inputs[i].barcode=='ITEM000000'||inputs[i].barcode=='ITEM000001'||inputs[i].barcode=='ITEM000004')
    {
     tol_Sum+=per_Sum[i];
    }
    
  }
//#4.打印
var str='';
  for(var i=0;i<inputs.length;i++)
  {
    if(inputs[i].barcode=='ITEM000000'||inputs[i].barcode=='ITEM000001'||inputs[i].barcode=='ITEM000004')
    {
     str+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+
         inputs[i].unit+'，单价：'+inputs[i].price+'(元)'+'，小计：'+per_Sum[i].toFixed(2)+'(元)\n';
    }
  }
    console.log('***<没钱赚商店>收据***\n'+str
    +'----------------------\n'+'总计：'+tol_Sum.toFixed(2)+'(元)\n'+'**********************');
}
