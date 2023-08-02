export class Ticket {
    constructor() {
      this.status = null;
      this.users = [];
    }
  
    changeStatus(newStatus) {
      this.status = newStatus;
      this.notifyUsers();
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    removeUser(user) {
      this.users = this.users.filter(u => u !== user);
    }
  
    notifyUsers() {
      this.users.forEach(user => user.update(this.status));
    }
}

export class User {
    constructor(name) {
        this.name = name;
    }

    update(status) {
        console.log(`User ${this.name} has been notified: Ticket status is now ${status}`);
    }
}