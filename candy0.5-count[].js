const list = [1, 2, 4, 2, 1, 4, 6, 8, 9, 2]

function printCount(arr) {
  // 實作內容
  const score = {}
  arr.forEach(a => {
      if(score[a]){ 
          //這裡的[]表示拿取物件底下的屬性(key)，通常選取用.來選取，但如果後方是數字，則不能使用.改用字串的方式去拿，通常用在動態產出key的時候
        //cc.a → 選取cc後面的a屬性
        //動態變化的時候用[]
          score[a] = score[a] + 1
      }else{
          score[a] = 1
      }
  });
  return score
}

console.log(printCount(list))

// 希望印出：
// 1: 2
// 2: 3
// 4: 2
// 6: 1
// 8: 1
// 9: 1

//[] 物件底下拿取物件屬性
// cc.xyz = cc[`xyz`] 從cc裡面拿xyz也可以用中括號拿取 
// cc.1 = cc[1] 
