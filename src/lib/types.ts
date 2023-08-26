export interface CarousalImage {
    // link to image
    url: string;
    // caption for image
    caption?: string;
    // optional id for the image
    id?: string;    
    // optional name for image
    name?: string;
    // Who took the image
    attribution?: string;
    // Licensing information to use the image
    license?: string;
}
export type CarousalImages = Array<CarousalImage>

export type GlobResults = Record<string, ()=>Promise<unknown>>

export interface Course {
    about: string;
    listings: string[];
    professors: string[];
    title: string;
}
export type Courses = Course[]
    | Array<Course>

export interface Link {
    href: string;
    text: string;
}
export type Links = Link[] 
    | Array<Link> 
    | ArrayLike<Link>

export interface PublicationCategory {
    category: string;
    links: Links;
}
export type PublicationCategories = PublicationCategory[] | 
    Array<PublicationCategory> | 
    ArrayLike<PublicationCategory>



export interface Member {
    name: string;
    title?: string;
    image?: string;
    website?: string;
    github?: string;
    google_scholar?: string;
    twitter?: string;
    semantic_scholar?: string;
    status?: string;
    about?: string;
}
export type Members = Member[] 
    | Array<Member> 
    // | ArrayLike<Member>

export interface ImageHero {
    title: string;
    image: string;
    blurb?: string;
}

export interface Publication {
    project: string;
    url: string;    
    year: number;
    title: string;
    authors: string[];    
    abstract: string;        
    venue?: string;

    makeAuthorString: () => string;
    makePublicationString: () => string;
}

export type Publications = Publication[] 
    | Array<Publication> 

export interface PublicationsGroupedByYear {
    [key: string]: Publications;
}
export interface Project {    
    title: string;
    href:string; 
    project_category: string;         
    tldr: string;
    description?: string;

    hero: ImageHero;
}

export type Projects = Project[] 
    | Array<Project> 
    // | ArrayLike<Project>

export interface quote {
    text:string;
    attributed:string;
}



import type {ComponentType, SvelteComponentTyped} from 'svelte'

export interface  ComponentMap {
    [key: string]: ComponentType | SvelteComponentTyped
}