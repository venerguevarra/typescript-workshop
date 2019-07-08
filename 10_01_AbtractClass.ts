// Abstract classes are mainly for inheritance where other classes may derive from them.
// We cannot create an instance of an abstract class.

abstract class UniquePerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(string): Person;
}

class UniqueEmployee extends UniquePerson {
  empCode: number;

  constructor(name: string, code: number) {
    // The class which implements an abstract class must call super() in the constructor.
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): UniquePerson {
    // execute AJAX request to find an employee from a db
    return new UniqueEmployee(name, 1);
  }
}

let uniqueEmp: UniquePerson = new UniqueEmployee("James", 100);
uniqueEmp.display(); //James
