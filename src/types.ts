export interface Banner {
  title: string;
  description: string;
  buttonText: string;
}

export interface Section {
  title: string;
  description: string;
  image: string;
}

export interface PageData {
  banner: Banner;
  sections: Section[];
}

export interface Location {
  state: string;
  image: string;
  buttonText: string;
}

export interface contactBanner {
  title: string;
  text: string;
}

export interface ContactData {
  banner: contactBanner;
  locations: Location[];
}

export interface OurCompanyPageData {
  aboutUs: Section;
  sectionTwo: Section;
  locationSection: Location[];
  sectionFour: Section;
}

export interface DesignCard {
  title: string;
  text: string;
  img: string;
  hiddenText: string;
}

export interface DesignCategory {
  banner: {
    title: string;
    text: string;
  };
  cards: DesignCard[];
  sharedOtherDesigns: otherDesign[];
}

export interface otherDesign {
  title: string;
  link: string;
  text: string;
  img: string;
}
