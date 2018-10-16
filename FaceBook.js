var Academics = /** @class */ (function () {
    function Academics(ssc, hsc, higherstudies) {
        this.ssc = ssc;
        this.hsc = hsc;
        this.higherstudies = higherstudies;
        this.ssc = ssc;
        this.hsc = hsc;
        this.higherstudies = higherstudies;
    }
    return Academics;
}());
var AccountSocial = /** @class */ (function () {
    function AccountSocial(instagram, twitter, whatsapp, gmail) {
        this.instagram = instagram;
        this.twitter = twitter;
        this.whatsapp = whatsapp;
        this.gmail = gmail;
        this.instagram = instagram;
        this.twitter = twitter;
        this.whatsapp = whatsapp;
        this.gmail = gmail;
    }
    return AccountSocial;
}());
var Facebook = /** @class */ (function () {
    function Facebook(firstName, phoneNumber, relationShipInfo, gender, id, displayPicture, studies, location, dateOfBirth, socialLinks, employmentStatus, email, profileUpdate) {
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
    Facebook.prototype.getUserName = function () {
        return this.firstName;
    };
    Facebook.prototype.getMobilePhone = function () {
        return this.phoneNumber;
    };
    Facebook.prototype.getUserRelationshipStatus = function () {
        return this.relationShipInfo;
    };
    Facebook.prototype.getGender = function () {
        return this.gender;
    };
    Facebook.prototype.getProfileId = function () {
        return this.id;
    };
    Facebook.prototype.getPicture = function () {
        return this.displayPicture;
    };
    Facebook.prototype.getEducation = function () {
        return this.studies;
    };
    Facebook.prototype.getAddress = function () {
        return this.location;
    };
    Facebook.prototype.getBirthday = function () {
        return this.dateOfBirth;
    };
    Facebook.prototype.getSocialLinks = function () {
        return this.socialLinks;
    };
    Facebook.prototype.getWork = function () {
        return this.employmentStatus;
    };
    Facebook.prototype.getPrimaryEmail = function () {
        return this.email;
    };
    Facebook.prototype.getLifeEvents = function () {
        return this.profileUpdate;
    };
    //setters
    Facebook.prototype.setUserName = function (firstName) {
        this.firstName = firstName;
    };
    Facebook.prototype.setMobilePhone = function (phoneNumber) {
        return (this.phoneNumber = phoneNumber);
    };
    Facebook.prototype.setUserRelationshipStatus = function (relationShipInfo) {
        return (this.relationShipInfo = relationShipInfo);
    };
    Facebook.prototype.setGender = function (gender) {
        return (this.gender = gender);
    };
    Facebook.prototype.setProfileId = function (id) {
        return (this.id = id);
    };
    Facebook.prototype.setPicture = function (displayPicture) {
        return (this.displayPicture = displayPicture);
    };
    Facebook.prototype.setEducation = function (studies) {
        return (this.studies = studies);
    };
    Facebook.prototype.setAddress = function (location) {
        return (this.location = location);
    };
    Facebook.prototype.setBirthday = function (dateOfBirth) {
        return this.dateOfBirth;
    };
    Facebook.prototype.setSocialLinks = function (socialLinks) {
        return (this.socialLinks = socialLinks);
    };
    Facebook.prototype.setWork = function (employmentStatus) {
        return (this.employmentStatus = employmentStatus);
    };
    Facebook.prototype.setPrimaryEmail = function (email) {
        return (this.email = email);
    };
    Facebook.prototype.setLifeEvents = function (profileUpdate) {
        this.profileUpdate = profileUpdate;
    };
    return Facebook;
}());
//Instance creation of Social class
var academics = new Academics("SSC", "HSC", "Degree");
var socialmedia = new AccountSocial("instagram.com", "twitter.com", "whatsapp.com", "gmail.com");
var employement = ["Sample Job-1", "Sample Job-2", "Samle Job-2"];
var statusUpdate = ["born", "enjoyed life", "death"];
var fbprofile = new Facebook("newUser", "123456789", "single", "male", 1021456923145698, "http://demourl.com", academics, "abc street kolkata", "19/12/1995", socialmedia, employement, "abc@gmail.com", statusUpdate);
console.log(fbprofile);
