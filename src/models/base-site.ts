export class BaseSite {
  id: number;
  imageUrl: string;
  siteName: string;
  siteUrl: string;
}

export const BASESITES: BaseSite[] = [
  {
    id: 1,
    imageUrl: 'assets/imgs/google.png',
    siteName: 'Google',
    siteUrl: 'https://www.google.com'
  },
  {
    id: 2,
    imageUrl: 'assets/imgs/facebook.png',
    siteName: 'Facebook',
    siteUrl: 'https://www.facebook.com'
  },
  {
    id: 3,
    imageUrl: 'assets/imgs/twitter.png',
    siteName: 'Twitter',
    siteUrl: 'https://twitter.com'
  },
  {
    id: 4,
    imageUrl: 'assets/imgs/gmail.png',
    siteName: 'Gmail',
    siteUrl: 'https://mail.google.com'
  },
  {
    id: 5,
    imageUrl: 'assets/imgs/youtube.png',
    siteName: 'Youtube',
    siteUrl: 'https://www.youtube.com'
  }
]