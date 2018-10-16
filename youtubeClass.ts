class Comments {
  userName: string;
  date: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  replyCount: number;

  constructor(
    userName: string,
    date: string,
    description: string,
    likeCount: number,
    dislikeCount: number,
    replyCount: number
  ) {
    this.userName = userName;
    this.date = date;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.replyCount = replyCount;
  }
}

class Youtube {
  id: string;
  title: string;
  createdBy: string;
  duration: number;
  resolution: number[] = [144, 240, 360, 480, 720, 1080];
  subtitle: string[];
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  subscriberCount: number;
  notificationSunscriberCount: number;
  description: string;
  dateOfPublish: string;
  category: string;
  license: string;
  comments: Comments[] = [];

  constructor(
    id: string,
    title: string,
    createdBy: string,
    duration: number,
    subtitle: string[],
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    subscriberCount: number,
    notificationSunscriberCount: number,
    description: string,
    dateOfPublish: string,
    category: string,
    license: string
  ) {
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

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getcreatedBy(): string {
    return this.createdBy;
  }

  getDuration(): number {
    return this.duration;
  }

  getSubtitle() {
    return this.subtitle;
  }

  getResolution(): number[] {
    return this.resolution;
  }

  getViewCount(): number {
    return this.viewCount;
  }

  getLikeCount(): number {
    return this.likeCount;
  }

  getDislikeCount(): number {
    return this.dislikeCount;
  }

  getSubscriberCount(): number {
    return this.subscriberCount;
  }

  getNotificationSunscriberCount(): number {
    return this.notificationSunscriberCount;
  }

  getDescription(): string {
    return this.description;
  }

  getDateOfPublish(): string {
    return this.dateOfPublish;
  }

  getCategory(): string {
    return this.category;
  }
  getLicense(): string {
    return this.license;
  }

  getComment(): Comments[] {
    return this.comments;
  }

  //setters

  setComments(comments: Comments[]) {
    this.comments = comments;
  }

  setID(id: string) {
    this.id = id;
  }
  setTitle(title: string) {
    this.title = title;
  }
  setcreatedBy(createdBy: string) {
    this.createdBy = createdBy;
  }

  setDuration(duration: number) {
    this.duration = duration;
  }

  setSubtitle(subtitle: string[]) {
    this.subtitle = subtitle;
  }

  SetResolution(resolution: number[]) {
    this.resolution = resolution;
  }

  setViewCount(viewCount: number) {
    this.viewCount = viewCount;
  }

  setLikeCount(likeCount: number) {
    this.likeCount = likeCount;
  }

  setDislikeCount(dislikeCount: number) {
    this.dislikeCount = dislikeCount;
  }

  setSubscriberCount(subscriberCount: number) {
    this.subscriberCount;
  }

  setNotificationSunscriberCount(notificationSunscriberCount: number) {
    this.notificationSunscriberCount = notificationSunscriberCount;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setDateOfPublish(dateOfPublish: string) {
    return (this.dateOfPublish = dateOfPublish);
  }

  setCategory(category: string) {
    return (this.category = category);
  }
  setLicense(license: string) {
    return (this.license = license);
  }

  setComment(comments: Comments[]) {
    return (this.comments = comments);
  }
}

//Instance creation of Youtube class

let musicVideo = new Youtube(
  "sampleId",
  "This is Sample Music Video",
  "Vevo",
  4.58,
  ["English", "Hindi"],
  200,
  150,
  50,
  60,
  20,
  "Description about content",
  "15/10/2018",
  "Entertainment",
  "Standard YouTube License"
);

let comments: Comments[] = [];
let review1 = new Comments(
  "SampleYoutubeChannel-1",
  "15/10/18",
  "A medium rare comment",
  150865,
  5000,
  1658
);
let review2 = new Comments(
  "SampleYoutubeChannel-2",
  "15/10/2018",
  "Impressive Comment",
  300540,
  4048,
  1287
);
let review3 = new Comments(
  "SampleYoutubeChannel-3",
  "15/10/2018",
  "Inapproprative Comment",
  400540,
  44048,
  1515
);
let review4 = new Comments(
  "SampleYoutubeChannel-4",
  "15/10/2018",
  "Rude Comment",
  2651,
  15165,
  1312
);

//assigning values
comments[0] = review1;
comments[1] = review2;
comments[2] = review3;
comments[3] = review4;

musicVideo.setComments(comments);
console.log(musicVideo);
