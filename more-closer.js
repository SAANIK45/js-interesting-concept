const bank = (name) => {
    let balance = 0;
    return{
        deposit :(amount) =>{
            balance += amount;
            return balance; 
        },
        withdraw :(amount) =>{
            balance -= amount;
            return balance;
        }
    }
}

const dbbl  = bank('dbbl');
console.log(dbbl);
console.log(dbbl.deposit(400));
console.log(dbbl.deposit(300));
console.log(dbbl.deposit(100));
console.log(dbbl.withdraw(200));
