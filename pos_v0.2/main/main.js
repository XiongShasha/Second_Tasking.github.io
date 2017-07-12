'use strict';

function printReceipt(inputs)
{
//#1.调用loadAllItems()函数得到一个新的商品清单inputsArr：[Object]，再通过与传入的barcode联系，得到用户购买物品的详细清单，并计算商品数量
 
 var inputsArr=loadAllItems();//得到的新的商品清单
 var res=[];//存储inputs数组内重复的元素以及重复的个数
 for(var i=0;i<inputs.length;)//计算inputs数组内重复的元素以及重复的个数
  {
   var count=0;
   for(var j=i;j<inputs.length;j++)
    { 
      if(inputs[i]==inputs[j])
      {
        count++;
      }
    }
    res.push([inputs[i],count]);
    i+=count;
  } 

 //删除数组中重复的元素
function unique(inputs)
{ var tmp=new Array();
  for(var i in inputs)
  {
    if(tmp.indexOf(inputs[i])==-1)
    {
      tmp.push(inputs[i]);
    }
  }
  return tmp;
}

  var Com_inputs=[];//存储最后生成的所购买的物品清单
  for(var i=0;i<unique(inputs).length;i++) //构建出一个新的包含所有商品信息的数组
  {
    for(var j=0;j<inputsArr.length;j++)
    {
      if(unique(inputs)[i]==inputsArr[j].barcode)
      {
         Com_inputs[i]=inputsArr[j];
      } 
    }   
  }
  for(var i=0;i<res.length;i++) 
  {
    Com_inputs[i].count=res[i][1];
  }

//#2.计算小计
function S_Sum(Com_inputs)
{
  var per_Sum=[];
  for(var i=0;i<Com_inputs.length;i++)
  {
    per_Sum[i]=Com_inputs[i].count*Com_inputs[i].price;
  }
  return per_Sum;
}

//#3.计算总金额
  var per_Sum=S_Sum(Com_inputs);
  function t_Sum(per_Sum)
  {
    var tol_Sum=0;
    for(var i=0;i<per_Sum.length;i++)
    { 
      tol_Sum+=per_Sum[i];
    }
    return tol_Sum;
  }

//#4.打印
  var str='';
  for(var i=0;i<unique(inputs).length;i++)
  {
     str+='名称：'+Com_inputs[i].name+'，数量：'+Com_inputs[i].count+
        Com_inputs[i].unit+'，单价：'+Com_inputs[i].price.toFixed(2)+'(元)'+'，小计：'+per_Sum[i].toFixed(2)+'(元)\n';
  }
    console.log('***<没钱赚商店>收据***\n'+str
    +'----------------------\n'+'总计：'+t_Sum(per_Sum).toFixed(2)+'(元)\n'+'**********************');
}
