class Contact {
    
    constructor(props){
        super(props);
        this.first_name = props.first_name;
        this.last_name = props.last_name;
        this.email = props.email;
        this.telephone = props.telephone;
    }

   
    getFirstName() {
        return this.first_name;
    }
  
    setFirstName(first_name) {
        this.first_name = first_name;
    }

    getLasttName() {
        return this.last_name;
    }
  
    setLastName(last_name) {
        this.last_name = last_name;
    }

    getEmail() {
        return this.email;
    }
  
    setEmail(email) {
        this.email = email;
    }

    getTelephone() {
        return this.telephone;
    }
  
    setTelephone(telephone) {
        this.telephone = telephone;
    }
}