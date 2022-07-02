// menu to organize a STEAM Summer camp.
class Member {
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }
    describe () {
        return `${this.name} works as ${this.role}`;
    }
}

class Group {
    constructor (name) {
        this.name = name;
        this.members = [];

    }
    addMember (member) {
        if(member instanceof Member) {
            this.members.push(member);         
    }   else {
        throw new Error ('You can only ass an instance of Member. Argument is not a member: ${member');
    }
}
    describe() {
        return `${this.name} has ${this.members.length} members.`; 
    }
}

class Menu {
    constructor () {
        this.groups = [];
        this.selectedGroup = null;
    }
    start () {
        let selection = this.showMainMenuOptions ();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createGroup();
                    break;
                case '2':
                    this.viewGroup();
                    break;
                case '3':
                    this.displayGroups();
                    break;
                case '4':
                    this.deleteGroup();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Completed!');
    }

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) create new group
        2) view group
        3) display all groups
        4) delete group
        `)

    }

    showGroupMenuOptions() {
        return prompt (`
        0) prompt
        1) create member
        2) delete member

        `)
    }

    displayGroups() {
        let groupString = '';
        for (let i = 0; i< this.groups.length; i++) {
            groupString += i + ')' + this.groups [i].name + '\n';
        }
        alert(groupString);
    }

    createGroup () {
        let name = prompt('Enter name for new group:');
        this.groups.push(new Group(name));
    }

    viewGroup () {
        let index = prompt('Enter the index of the group you wish to view:');
        if(index > -1 && index < this.groups.length) {
            this.selectedGroup = this.groups [index];
            let description = 'Group Name: ' + this.selectedGroup.name + '\n';

            for (let i = 0; i < this.selectedGroup.members.length; i++) {
                description += i + ')' + this.selectedGroup.members [i].name + ' - ' + this.selectedGroup.members [i].role + '\n';
            }

            let selection = this.showGroupMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.deleteMember();
            }
        }
    }

    deleteGroup () {
        let index = prompt('Enter the index of the group you wish to delete: ');
        if(index > -1 && index < this.groups.length) {
            this.groups.splice(index, 1);
        }
    }

    createMember () {
        let name = prompt('Enter name for new member:');
        let role = prompt('Enter the role for new member:');
        this.selectedGroup.members.push (new Member(name, role));
    }

    deleteMember () {
        let index = prompt ('Enter the index of the member you wish to delete: ');
        if(index > -1 && index < this.selectedGroup.members.length) {
            this.selectedGroup.members.splice (index, 1)
        }
    }
}

let menu = new Menu ();
menu.start();