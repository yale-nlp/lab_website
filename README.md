# YaleNLP Lab Website
YaleNLP Lab website is built primarily with Svelte, DaisyUI, SvelteKit, Tailwindcss, and Typescript. Data is managed via static YAML files.
The template is borrowed from https://github.com/KrishnaswamyLab/krishnaswamy-lab-site

# Contributing
Are you a lab member trying to update information on the website? Then this is the section for you!

The majority of the site's content is stored as independent YAML files under the directory
`src/yaml/<data-type>/<record>.yml`, where `data-type` is one of:

- `members`: Information about members under `https://nlp.cs.yale.edu/members`.
- `projects`: Information about projects listed under `https://nlp.cs.yale.edu/projects`.
- `selected_publications`: Selected papers `https://nlp.cs.yale.edu/publications`.

and `<record>` is just the filename and represents a single element of the `data-type`. What is important is the content of the file not the name! Having a descriptive name makes it easier for humans to find and update.

So what should you put in a record? Well that is dependant on its *type*. The entire site is written with TypeScript and so each `data-type` has a class and a collection of properties that are expected listed below (or see `src/lib/types.ts`). 

# Run Locally
1. Clone the repo
2. run `npm install`
3. run `npm run dev`
   
# Types
Types are defined [here](https://github.com/yale-nlp/lab_website/blob/main/src/lib/types.ts)
**NOTE**: the presence of a `?` means that the property is optional!

## Members

| Property | Type | Description |
| -------- | ---- | ----------- |
| member | MemberName | name of member |
| name | string | name of member |
| status | string | category of a member, should be one of [pi, phd, visit_phd, master, undergraduate] |
| title? | string | link to CV |
| website? | string | link to personal website |
| github? | string | link to github |
| google_scholar? | string | link to google scholar |
| twitter? | string | link to twitter |
| semantic_scholar? | string | link to semantic scholar |
| about? | string | short description of member |


## Projects
| Property | Type | Description |
| -------- | ---- | ----------- |
| href | string | relative url to project specific page `/project/<href>` |
| title | string | name of project | 
| project_category | string | category of project, should match with the `project` field of publication |
| tldr | string | description to use in list at top of `/projects` page |
| hero | ImageHero | project hero image info |
| description | string | description of project |

## Publication
| Property | Type | Description |
| -------- | ---- | ----------- |
| url | string | link to publication |
| year | number | year of publication |
| title | string | title of publication |
| authors | string[] | list of authors |
| abstract| string | abstract of publication |
| venue? | string | venue of publication |
| project? | string | project category of publication, should match with the `project_category` field of project |