class Academics {
  constructor(
    private ssc: string,
    private hsc: string,
    private higherstudies: string
  ) {
    this.ssc = ssc;
    this.hsc = hsc;
    this.higherstudies = higherstudies;
  }
}

class AccountSocial {
  constructor(
    private instagram: string,
    private twitter: string,
    private whatsapp: string,
    private gmail: string
  ) {
    this.instagram = instagram;
    this.twitter = twitter;
    this.whatsapp = whatsapp;
    this.gmail = gmail;
  }
}

class Facebook {
  firstName: string;
  phoneNumber: string;
  relationShipInfo: string;
  gender: string;
  id: number;
  displayPicture: string;
  studies: Academics;
  location: string;
  dateOfBirth: string;
  socialLinks: AccountSocial;
  employmentStatus: string[];
  email: string;
  profileUpdate: string[];

  constructor(
    firstName: string,
    phoneNumber: string,
    relationShipInfo: string,
    gender: string,
    id: number,
    displayPicture: string,
    studies: Academics,
    location: string,
    dateOfBirth: string,
    socialLinks: AccountSocial,
    employmentStatus: string[],
    email: string,
    profileUpdate: string[]
  ) {
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.relationShipInfo = relationShipInfo;
    this.gender = gender;
    this.id = id;
    this.displayPicture = displayPicture;
    this.studies = studies;
    this.location = location;
    this.dateOfBirth = dateOfBirth;
    this.socialLinks = socialLinks;
    this.employmentStatus = employmentStatus;
    this.email = email;
    this.profileUpdate = profileUpdate;
  }

  //getters

  public getUserName(): string {
    return this.firstName;
  }
  public getMobilePhone(): string {
    return this.phoneNumber;
  }
  public getUserRelationshipStatus(): string {
    return this.relationShipInfo;
  }
  public getGender(): string {
    return this.gender;
  }
  public getProfileId(): number {
    return this.id;
  }
  public getPicture(): string {
    return this.displayPicture;
  }
  public getEducation(): Academics {
    return this.studies;
  }
  public getAddress(): string {
    return this.location;
  }
  public getBirthday(): string {
    return this.dateOfBirth;
  }
  public getSocialLinks(): AccountSocial {
    return this.socialLinks;
  }
  public getWork(): string[] {
    return this.employmentStatus;
  }

  public getPrimaryEmail(): string {
    return this.email;
  }

  public getLifeEvents(): string[] {
    return this.profileUpdate;
  }

  //setters

  public setUserName(firstName: string) {
    this.firstName = firstName;
  }
  public setMobilePhone(phoneNumber: string) {
    return (this.phoneNumber = phoneNumber);
  }
  public setUserRelationshipStatus(relationShipInfo: string) {
    return (this.relationShipInfo = relationShipInfo);
  }
  public setGender(gender: string) {
    return (this.gender = gender);
  }
  public setProfileId(id: number) {
    return (this.id = id);
  }
  public setPicture(displayPicture: string) {
    return (this.displayPicture = displayPicture);
  }
  public setEducation(studies: Academics) {
    return (this.studies = studies);
  }
  public setAddress(location: string): string {
    return (this.location = location);
  }
  public setBirthday(dateOfBirth: string) {
    return this.dateOfBirth;
  }
  public setSocialLinks(socialLinks: AccountSocial) {
    return (this.socialLinks = socialLinks);
  }
  public setWork(employmentStatus: string[]) {
    return (this.employmentStatus = employmentStatus);
  }

  public setPrimaryEmail(email: string) {
    return (this.email = email);
  }

  public setLifeEvents(profileUpdate: string[]) {
    this.profileUpdate = profileUpdate;
  }
}

//Instance creation of Social class
let academics = new Academics("SSC", "HSC", "Degree");
let socialmedia = new AccountSocial(
  "instagram.com",
  "twitter.com",
  "whatsapp.com",
  "gmail.com"
);
let employement: string[] = ["Sample Job-1", "Sample Job-2", "Samle Job-2"];
let statusUpdate: string[] = ["born", "enjoyed life", "death"];

let fbprofile = new Facebook(
  "newUser",
  "123456789",
  "single",
  "male",
  1021456923145698,
  "http://demourl.com",
  academics,
  "abc street kolkata",
  "19/12/1995",
  socialmedia,
  employement,
  "abc@gmail.com",
  statusUpdate
);

console.log(fbprofile);
