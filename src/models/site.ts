export class Site {
  id: number;
  imageUrl: string;
  siteName: string;
  siteUrl: string;
  username: string;
  password: string;
  backgroundColor: string;
  color: string;

  constructor() {
    this.id = -1;
    this.imageUrl = '';
    this.siteName = '';
    this.siteUrl = '';
    this.username = '';
    this.password = '';
    this.backgroundColor = '';
    this.color = '';
  }
}