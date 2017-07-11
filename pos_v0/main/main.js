'use strict';

function printReceipt(inputs) {
  function GOOD(barcode,name,unit,price,count)
{
  this.barcode=barcode;
  this.name=name;
  this.unit=unit;
  this.price=price;
  this.count=count;
}
  var good1=inputs[0];
  var good2=inputs[1];
  var good3=inputs[2];//9min
  var per_Sum = new Array();
  per_Sum[0]=good1.count*good1.price;
  per_Sum[1]=good2.count*good2.price;
  per_Sum[2]=good3.count*good3.price;
  var tol_Sum;
  tol_Sum=per_Sum[0]+per_Sum[1]+per_Sum[2];//16min
    console.log('***<没钱赚商店>收据***\n'+'名称：'+good1.name+'，数量：'+good1.count+good1.unit+'，单价：'+good1.price.toFixed(2)+'(元)'+'，小计：'+per_Sum[0].toFixed(2)+'(元)\n'
    +'名称：'+good2.name+'，数量：'+good2.count+good2.unit+'，单价：'+good2.price.toFixed(2)+'(元)'+'，小计：'+per_Sum[1].toFixed(2)+'(元)\n'
    +'名称：'+good3.name+'，数量：'+good3.count+good3.unit+'，单价：'+good3.price.toFixed(2)+'(元)'+'，小计：'+per_Sum[2].toFixed(2)+'(元)\n'
    +'----------------------\n'+'总计：'+tol_Sum.toFixed(2)+'(元)\n'+'**********************');//19min
}
