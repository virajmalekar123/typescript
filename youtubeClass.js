var Comments = /** @class */ (function () {
    function Comments(userName, date, description, likeCount, dislikeCount, replyCount) {
        this.userName = userName;
        this.date = date;
        this.description = description;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.replyCount = replyCount;
    }
    return Comments;
}());
var Youtube = /** @class */ (function () {
    function Youtube(id, title, createdBy, duration, subtitle, viewCount, likeCount, dislikeCount, subscriberCount, notificationSunscriberCount, description, dateOfPublish, category, license) {
        this.resolution = [144, 240, 360, 480, 720, 1080];
        this.comments = [];
        this.id = id;
        this.title = title;
        this.createdBy = createdBy;
        this.duration = duration;
        this.subtitle = subtitle;
        this.viewCount = viewCount;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.subscriberCount = subscriberCount;
        this.notificationSunscriberCount = notificationSunscriberCount;
        this.description = description;
        this.dateOfPublish = dateOfPublish;
        this.category = category;
        this.license = license;
    }
    //getters
    Youtube.prototype.getId = function () {
        return this.id;
    };
    Youtube.prototype.getTitle = function () {
        return this.title;
    };
    Youtube.prototype.getcreatedBy = function () {
        return this.createdBy;
    };
    Youtube.prototype.getDuration = function () {
        return this.duration;
    };
    Youtube.prototype.getSubtitle = function () {
        return this.subtitle;
    };
    Youtube.prototype.getResolution = function () {
        return this.resolution;
    };
    Youtube.prototype.getViewCount = function () {
        return this.viewCount;
    };
    Youtube.prototype.getLikeCount = function () {
        return this.likeCount;
    };
    Youtube.prototype.getDislikeCount = function () {
        return this.dislikeCount;
    };
    Youtube.prototype.getSubscriberCount = function () {
        return this.subscriberCount;
    };
    Youtube.prototype.getNotificationSunscriberCount = function () {
        return this.notificationSunscriberCount;
    };
    Youtube.prototype.getDescription = function () {
        return this.description;
    };
    Youtube.prototype.getDateOfPublish = function () {
        return this.dateOfPublish;
    };
    Youtube.prototype.getCategory = function () {
        return this.category;
    };
    Youtube.prototype.getLicense = function () {
        return this.license;
    };
    Youtube.prototype.getComment = function () {
        return this.comments;
    };
    //setters
    Youtube.prototype.setComments = function (comments) {
        this.comments = comments;
    };
    Youtube.prototype.setID = function (id) {
        this.id = id;
    };
    Youtube.prototype.setTitle = function (title) {
        this.title = title;
    };
    Youtube.prototype.setcreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Youtube.prototype.setDuration = function (duration) {
        this.duration = duration;
    };
    Youtube.prototype.setSubtitle = function (subtitle) {
        this.subtitle = subtitle;
    };
    Youtube.prototype.SetResolution = function (resolution) {
        this.resolution = resolution;
    };
    Youtube.prototype.setViewCount = function (viewCount) {
        this.viewCount = viewCount;
    };
    Youtube.prototype.setLikeCount = function (likeCount) {
        this.likeCount = likeCount;
    };
    Youtube.prototype.setDislikeCount = function (dislikeCount) {
        this.dislikeCount = dislikeCount;
    };
    Youtube.prototype.setSubscriberCount = function (subscriberCount) {
        this.subscriberCount;
    };
    Youtube.prototype.setNotificationSunscriberCount = function (notificationSunscriberCount) {
        this.notificationSunscriberCount = notificationSunscriberCount;
    };
    Youtube.prototype.setDescription = function (description) {
        this.description = description;
    };
    Youtube.prototype.setDateOfPublish = function (dateOfPublish) {
        return (this.dateOfPublish = dateOfPublish);
    };
    Youtube.prototype.setCategory = function (category) {
        return (this.category = category);
    };
    Youtube.prototype.setLicense = function (license) {
        return (this.license = license);
    };
    Youtube.prototype.setComment = function (comments) {
        return (this.comments = comments);
    };
    return Youtube;
}());
//Instance creation of Youtube class
var musicVideo = new Youtube("sampleId", "This is Sample Music Video", "Vevo", 4.58, ["English", "Hindi"], 200, 150, 50, 60, 20, "Description about content", "15/10/2018", "Entertainment", "Standard YouTube License");
var comments = [];
var review1 = new Comments("SampleYoutubeChannel-1", "15/10/18", "A medium rare comment", 150865, 5000, 1658);
var review2 = new Comments("SampleYoutubeChannel-2", "15/10/2018", "Impressive Comment", 300540, 4048, 1287);
var review3 = new Comments("SampleYoutubeChannel-3", "15/10/2018", "Inapproprative Comment", 400540, 44048, 1515);
var review4 = new Comments("SampleYoutubeChannel-4", "15/10/2018", "Rude Comment", 2651, 15165, 1312);
//assigning values
comments[0] = review1;
comments[1] = review2;
comments[2] = review3;
comments[3] = review4;
musicVideo.setComments(comments);
console.log(musicVideo);
