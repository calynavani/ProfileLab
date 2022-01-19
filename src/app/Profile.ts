export class Profile {
  
  
    name: string;
    contactInfo: string;
    bio: string;

    constructor(name:string, contactInfo:string, bio:string){
      this.name = name;
      this.contactInfo = contactInfo;
      this.bio = bio;
    }

}