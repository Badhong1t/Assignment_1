class BankAccount{

    static existingAccountNumbers = [];//This is a static property.

    constructor(accountNumber,ownerName,balance){

        if(BankAccount.existingAccountNumbers.includes(accountNumber)){

            console.error(`Sorry This account number is unavailable, please choose a unique account number!`);
            return;

        }

        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        BankAccount.existingAccountNumbers.push(accountNumber);

    }

    deposit(amount){

        this.balance = this.balance + amount;
        return `Deposited $${amount} into account ${this.accountNumber}`;

    }

    withdraw(amount){

        if(amount > this.balance){

               return "Insufficient Funds";

            }

            else{

                this.balance = this.balance - amount;
                return `Withdrawn $${amount} from account ${this.accountNumber}`;

            }

    }

    getBalance(){

        return `Your balance is: $${this.balance}`;

    }

    displayAccountInfo(){

        return `Updated Account Information:
                Account Number: ${this.accountNumber}
                Owner Name: ${this.ownerName}
                Balance: $${this.balance}`;

    }

}

const client1 = new BankAccount(1001,"Naimul Hassan Badhan",1000);
const client2 = new BankAccount(1002,"John Doe",880);
const client3 = new BankAccount(1001,"Abdur Rahim",1200);

// Client1 section starts here.

console.log(`Initial Account Information:
            Account Number: ${client1.accountNumber}
            Owner Name: ${client1.ownerName}
            Balance: $${client1.balance}`);

console.log(`Deposit and withdrawal:
            ${client1.deposit(3000)}
            ${client1.withdraw(1500)}`);

console.log(client1.displayAccountInfo()); 

//Client1 section ends here.

//Client2 section starts here.

console.log(`Initial Account Information:
            Account Number: ${client2.accountNumber}
            Owner Name: ${client2.ownerName}
            Balance: $${client2.balance}`);

console.log(`Deposit and withdrawal:
            ${client2.deposit(4000)}
            ${client2.withdraw(500)}`);

console.log(client2.displayAccountInfo());

//Client2 section ends here.

//Client3 section starts here.

console.log(client3.accountNumber);

//Client3 section ends here.