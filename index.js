function add(a,b){
  console.log(arguments)
  if(arguments.length != 2){
    throw new Error("引数")
  }
  return a + b
}
console.log(add(1,2))