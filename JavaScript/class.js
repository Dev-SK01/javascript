
class SocialMedia{
    constructor(name , type , popularity){
        this.name = name ;
        this.type = type ; 
        this.popularity = popularity;
    }

    ShowMedia(){
        return console.log(`${this.name} is ${this.type} ${this.popularity} Popularity Platform`);
    }
}

const media_1 = new SocialMedia('Youtube' , 'Video Hosting' , 'High');
media_1.ShowMedia();

const media_2 = new SocialMedia('Facebook' , 'Sharing' , 'High');
media_2.ShowMedia();

const media_3 = new SocialMedia('Threads' , 'Tweets' ,'High');
media_3.ShowMedia();

class SocialMediaWithSetFunction extends SocialMedia{
    constructor(name, type , popularity){
       super(name,type,popularity);

    }
}

const media_4 = new SocialMediaWithSetFunction('Threads' , 'Twitter' , 'Medium ');
media_4.ShowMedia();

// todo   private property 

class student{
    #college = 'RMD';
    constructor(name , age , department){
        this.name = name ;
        this.age = age ; 
        this.department = department ; 
    }
    GetDetails(){
        return console.log(`${this.name} ${this.age} ${this.department} ${this.#college}`);
    }
}

const student_1 = new student('Srikanth','20','CSE');
student_1.GetDetails();
