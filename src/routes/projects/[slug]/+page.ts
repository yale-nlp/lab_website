/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import type {Publications, Projects, Project as ProjectInterface} from '$lib/types'
import {Publication, Project} from '$lib/classes'
import {SortProjectByYear, SortPublicationsByYear, LoadGlobsAllAtOnces} from '$lib/utils'

export interface ProjectData {
    project: ProjectInterface;
    slug: string;
    selectedPublications: Publications;
}

// import projects from '$lib/data/projects.json'
const yamls = import.meta.glob('/src/yaml/projects/*.yml', {import: 'default'})
const pub_yamls = import.meta.glob('/src/yaml/selected_publications/*.yml', {import: 'default'})

export async function load({ params }) {     
  let projects = (await LoadGlobsAllAtOnces(yamls) as Projects)
  let sorted = projects.map(e => new Project(e)).sort(SortProjectByYear)
  
  const slug = params.slug
  
  const matches = projects.filter(({href}) => href === slug)
  if (matches.length !== 1) {
    throw error(404, `Project with slug=${slug} not found`);
  }
  const project = new Project(matches[0] as ProjectInterface)  
  
  let publications = (await LoadGlobsAllAtOnces(pub_yamls) as Publications)
  let allPublications = publications.map(e=>new Publication(e)).sort(SortPublicationsByYear)

  let selectedPublications = allPublications.filter(pub => pub.project === project?.project_category);
  const data = {project, slug, selectedPublications} as ProjectData  
  return data;
}