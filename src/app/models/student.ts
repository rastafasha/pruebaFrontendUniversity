export class Student {
  id?: string;
    firstName: string;
    lastName: string;
    idCard: string;
    bornDate: string;
    phoneNumber: string;
    homeAddress: string;
    university: string;
    email: string;
    password: string;
    carrer: string;
    img?: string;

  constructor(
    firstName: string,
    lastName: string,
    idCard: string,
    bornDate: string,
    phoneNumber: string,
    homeAddress: string,
    university: string,
    password: string,
    email: string,
    carrer: string,
    img?: string,
  ){
    this.firstName = firstName,
    this.lastName=lastName,
    this.idCard=idCard,
    this.bornDate= bornDate,
    this.phoneNumber= phoneNumber,
    this.homeAddress=phoneNumber,
    this.university=university,
    this.email=email,
    this.password= password,
    this.carrer=carrer,
    this.img=img
  }

}
