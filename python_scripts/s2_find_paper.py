import argparse
import yaml
import os

import requests


def get_author_papers(author_id):
    rsp = requests.get(f'https://api.semanticscholar.org/graph/v1/author/{author_id}/papers',
                       params={'fields': 'title,url,year,authors,venue,abstract', 'limit': 1000})
    rsp.raise_for_status()
    return rsp.json()['data']


def find_authored_papers(author_id):
    papers = get_author_papers(author_id)

    return sorted(papers, key=lambda p: (-p['year'], p['title']))

venue_dict = {
    "Annual Meeting of the Association for Computational Linguistics": "ACL",
    "Conference of the European Chapter of the Association for Computational Linguistics": "EACL",
    "arXiv.org": "ArXiv",
    "Conference on Empirical Methods in Natural Language Processing": "EMNLP",
    "International Conference on Computational Linguistics": "COLING",
}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--author_id', default='2527954')
    parser.add_argument('--start_year', default='2022')
    args = parser.parse_args()

    # paper might change the title, so we need to remove the previous record
    existing_papers_dict = {}
    for filename in os.listdir('src/yaml/selected_publications'):
        filepath = f'src/yaml/selected_publications/{filename}'
        paper = yaml.load(open(filepath, 'r'), Loader=yaml.FullLoader)
        existing_papers_dict[paper["url"]] = filepath

    authored_papers = find_authored_papers(args.author_id)
    for paper in authored_papers:
        if int(paper["year"]) < int(args.start_year):
            continue
        
        year = paper["year"]
        paper["authors"] = [author["name"] for author in paper["authors"]]
        del paper["paperId"]
        paper["project"] = "other"
        
        paper["title"] = paper["title"].strip(".")

        if not paper["venue"]:
            paper["venue"] = "Preprint"
        else:
            if paper["venue"] in venue_dict:
                paper["venue"] = venue_dict[paper["venue"]]
            paper["venue"] = f"In {paper['venue']} {year}"

        filename = f"{year}_{paper['authors'][0].split(' ')[-1].lower()}_{paper['title'].split(' ')[0].lower()}.yml"

        filepath = f'src/yaml/selected_publications/{filename}'
        if not os.path.exists(filepath):
            yaml.dump(paper, stream=open(filepath, 'w'), sort_keys=True)
            # paper might change the title, so we need to remove the previous record
            if paper["url"] in existing_papers_dict:
                os.remove(existing_papers_dict[paper["url"]])
            

if __name__ == '__main__':
    main()