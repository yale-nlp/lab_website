import argparse
import yaml

import requests


def get_author_papers(author_id):
    rsp = requests.get(f'https://api.semanticscholar.org/graph/v1/author/{author_id}/papers',
                       params={'fields': 'title,url,year,authors,venue,abstract', 'limit': 1000})
    rsp.raise_for_status()
    return rsp.json()['data']


def find_authored_papers(author_id):
    papers = get_author_papers(author_id)

    return sorted(papers, key=lambda p: (-p['year'], p['title']))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('author_id')
    parser.add_argument('start_year')
    args = parser.parse_args()

    authored_papers = find_authored_papers(args.author_id)
    for paper in authored_papers:
        if int(paper["year"]) < int(args.start_year):
            continue
        
        year = paper["year"]
        paper["authors"] = [author["name"] for author in paper["authors"]]
        del paper["paperId"]
        paper["project"] = "other"

        filename = f"{year}_{paper['authors'][0].split(' ')[-1].lower()}_{paper['title'].split(' ')[0].lower()}.yml"

        yaml.dump(paper, stream=open(f'src/yaml/selected_publications/{filename}', 'w'), sort_keys=True)
            



if __name__ == '__main__':
    main()