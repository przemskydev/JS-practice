let person = {
  name: 'Brzemeg',
  age: 31,
  eyeColor: "blue", 
  sayHello: () => `My name is ${person.name}` 
};

let value = 10;

function errorCatcher() {

  try{
    exception()
  } catch(err) {
    console.error(`${err.name}: ${err.message}`)
  }
}

function exception(){
  let result;

  try {
    result = x/10;
  }
  catch(error){ 
    throw{
      message: "Panie, co Pan? Afere Pan chcesz nakręcić jakąś, w morde jeża?",
      name: "Błąd kurde"
    }
  }
  finally {
    console.log('finally')
  }
}

let prod = [
  {
    productId: 1,
    productNumber: 'F32S',
    name: 'apple'
  },
  'strawberry'
]

function constructorSample(){
  let product = prod[0];
  let dt = new Date();
  let str = new String();
  let isActive = true;

  console.log('prod = ' + prod.constructor.toString())
  console.log('product = ' + product.constructor.toString())
  console.log('product.productId = ' + product.productId.constructor.toString())
  console.log('product.productNumber = ' + product.productNumber.constructor.toString())
  console.log('dt = ' + dt.constructor.toString())
  console.log('str = ' + str.constructor.toString())
  console.log('isActive = ' + isActive.constructor.toString())
  console.log('constructorSample() = ' + constructorSample.constructor.toString())
}


function instanceOfSample(){
  let prod = new Product(1, 'Phone', 'FA5322D');
  let dt = new Date();
  let name = new String('Product name');
  let value = 'Just name'

  console.log('prod instanceOf Product =' + (prod instanceof Product).toString());
  console.log('prod instanceOf Object =' + (prod instanceof Object).toString())
  console.log('dt instanceOf Date =' + (dt instanceof Date).toString())
  console.log('dt instanceOf Object =' + (dt instanceof Object).toString())
  console.log('name instanceOf String =' + (name instanceof String).toString())
  console.log('value instanceOf String =' + (value instanceof String).toString())
  console.log('value instanceOf Object =' + (value instanceof Object).toString())

}

function Product(id, name, standardCost, listPrice){
  this.productId = id;
  this.name = name;
  this.color = 'Black';
  this.standardCost = standardCost;
  this.listPrice = listPrice,
  this.grossProfit = function(){
    return (this.listPrice - this.standardCost).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' }) 
  }
}

function constructorFunctions(){
  let prod1 = new Product(1, 'Apple', 15.99, 28.49)
  let prod2 = new Product(1, 'Peach', 18.99, 32.99)

  console.log(prod1.grossProfit())
  console.log(prod2.grossProfit())
}

function objectLiteral(){
  let product = {
    productId: 988,
    name: 'Red apple',
    standardCost: 1054.99,
    listPrice: 1499.99,
    grossProfit: function(){
      return (this.listPrice - this.standardCost).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })
    }
  }
  // console.log(product.grossProfit())

  let product2 = {
    standardCost: 879.49,
    listPrice: 1232.99
  }

  console.log(product.grossProfit.call(product))
  //this refers to product2 
  console.log(product.grossProfit.call(product2))
  console.log('')
  console.log(product.grossProfit.apply(product))
  console.log(product.grossProfit.apply(product2))
}


 function eventHandler(){
  constructorFunctions()
 }