import {Octokit} from "@octokit/core";

export class GithubApiService {
    private readonly client: Octokit

    constructor(
        private readonly token: string,
        private readonly owner: string,
        private readonly repo: string
    ){
        this.client = new Octokit({ auth: this.token });
    }

    async postCommentAnswer(answer: string, issueId: number) {
        await this.client.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
            owner: this.owner,
            repo: this.repo,
            issue_number: issueId,
            body: answer,
            headers: {
            'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }
}