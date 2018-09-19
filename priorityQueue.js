class priorityQ
{
    constructor(){
      this.Q = [[],[],[],[]];
    }
    
    add(value, priority){
        this.Q[priority].push(value);
        return this.Q;
    }

    removal(){
      for(var i = 0; i < this.Q.length; i++){
        if(this.Q[i].length == 0){
          continue;
        }else if(this.Q[i].length == 1){
          var x = this.Q[i][this.Q[i].length-1]
          this.Q[i].pop();
          return x;
        }else{
          for(var h = 0; h < this.Q[i].length-1; h++){
            var temp = this.Q[i][h];
            this.Q[i][h] = this.Q[i][h+1];
            this.Q[i][h+1] = temp;
          }
          this.Q[i].pop();
          return temp;
        }
      }
    }
}

var bob = new priorityQ();

bob.add(1,0);
console.log(bob);
bob.add(2,0);
console.log(bob);
bob.add(3,0);
console.log(bob);
bob.add(4,0);
console.log(bob);
bob.add(1,1);
console.log(bob);
bob.add(2,1);
console.log(bob);
bob.add(3,1);
console.log(bob);
bob.add(4,1);
console.log(bob);
bob.add(1,2);
console.log(bob);
bob.add(2,2);
console.log(bob);
bob.add(3,2);
console.log(bob);
bob.add(4,2);
console.log(bob);
bob.add(1,3);
console.log(bob);
bob.add(2,3);
console.log(bob);
bob.add(3,3);
console.log(bob);
bob.add(4,3);
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);
bob.removal();
console.log(bob);