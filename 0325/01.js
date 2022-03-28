// function heroCreator(name, power){
//     const hero ={
//         name: name, //可以只寫一個就好
//         power:power,
//         attack: function(){
//             console.log("ATTACK!");
//         },
//     }
//     return hero
// }

// const h1 = heroCreator("KK",100)
// const h2 = heroCreator("CC",200)
// h1.attack()
// h2.attack()

//透過圓形打造 Object.create

// const actions = {
//     attack: function(){
//         console.log("ATTACK!!!");
//     },
//     eat: function(){
//         console.log("yummy!");
//     },
// }

// function heroCreator(name, power){
//     const hero = Object.create(actions)
//     hero.name = name
//     hero.power = power
//     return hero
// }

// const h1 = heroCreator("KK",100)
// console.log(h1); //印出{name: 'KK', power: 100}
// h1.attack()
// console.log(h1.__proto__); //印出{attack: ƒ, eat: ƒ}

//所有的物件都有的屬性 __proto__
//會先找自己有沒有屬性，如果沒有會沿著__proto__去找，直到找到null/undefined


// function heroCreator(name, power){
//     this.name = name
//     this.power = power
// }

// const h1 = new heroCreator("KK",100)
// console.log(h1); //印出{name: 'KK', power: 100}
// //如果沒有new會印出undefined,因為沒有return,就沒有回傳值，new會自動回傳this的回傳值
// console.log(h1.__proto__ === heroCreator.prototype); //印出true
// //所有的function都有.prototype的屬性



// function HeroCreator(name, power) {
//     this.name = name
//     this.power = power
//   }
  
//   const actions = {
//     attack: function () {
//       console.log("attack")
//     },
//     eat: function () {
//       console.log("eat")
//     },
//   }
  

// HeroCreator.prototype = actions
// //會覆蓋前面的東西
// HeroCreator.prototype.attack = actions.attack
// HeroCreator.prototype.eat = actions.eat

  
// const h1 = new HeroCreator()
// h1.attack()


class Actions {
    attack() {
      console.log("attack")
    }
  
    eat() {
      console.log("eat")
    }
  }
  
  class HeroCreator extends Actions {
    constructor(name, power) {
      super()  //this預設的
      this.name = name
      this.power = power
    }
  }
  
  const h1 = new HeroCreator("kk", 100)
  h1.attack()
  console.log(h1)