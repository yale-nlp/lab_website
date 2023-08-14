import type {
    Member as MemberInterface,
    Publication as PublicationInterface,
    Project as ProjectInterface,
    CarousalImage as CarousalImageInterface
} from '$lib/types'

export class CarousalImage implements CarousalImageInterface {
    url
    caption?;
    id?;
    name?;
    attribution?;
    license?;
    constructor(image: CarousalImageInterface) {
        this.url = image.url
        this.caption = image?.caption
        this.id = image?.id
        this.name = image?.name
        this.attribution = image?.attribution
        this.license = image?.license
    }
}


export class Member implements MemberInterface {
    name;
    title?;

    about?;
    image?;
    
    twitter?;    
    website?;

    github?;
    google_scholar?;
    semantic_scholar?;

    constructor(member:MemberInterface) {
        this.name = member.name
        this.title = member.title
        this.about = member.about
        this.image = member.image
        this.website = member.website
        this.github = member.github 
        this.google_scholar = member.google_scholar
        this.twitter = member.twitter
        this.semantic_scholar = member.semantic_scholar
    }

    makeNameStr() {        
        return this.name
    };
}

export class Publication implements PublicationInterface {
    project;
    url;
    year;
    title;    
    authors;
    abstract;
    venue;
    
    constructor(publication:PublicationInterface) {        
        this.project = publication.project
        this.url = publication.url
        this.year = publication.year
        this.title = publication.title
        this.authors = publication.authors
        this.abstract = publication.abstract
        this.venue = publication.venue
    }

    makeAuthorString() {        
        let a = this.authors
        if (a.length > 10) {
            a = [...a.slice(0, 7), '...',...a.slice(-3)]
        }
        let s = ''
        for (let index = 0; index < a.length; index++) {            
            const name = a[index];
            
            s += name
            if (index < a.length - 2) {
                s += ', '
            } else if (index < a.length - 1) {
                s += ' &amp; '
            }
        }
        return s
    }

    makePublicationString() {
        return this.venue
    }
}


export class Project implements ProjectInterface {
    href;
    title;
    abbreviation;
    description;
    hero;
    publication;

    constructor(project:ProjectInterface) {
        this.href = project.href
        this.title = project.title
        this.abbreviation = project.abbreviation
        this.description = project.description
        this.hero = project.hero
        this.publication = new Publication(project.publication)
    }

    makeTextAboutLinks() {        
        return `
        You can access 
        ${this.hero.title}'s
        ${this?.publication?.github ? 'Github repository' : ''}
        ${this.publication.hasBothGithubAndJournal() ? 'and' : ''}
        ${this?.publication?.href  ? 'article page' : ''}
        by clicking the link${this.publication.hasBothGithubAndJournal() ? 's' : ''}
        below
        `
    }
}
