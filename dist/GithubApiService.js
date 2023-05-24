"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
const core_1 = require("@octokit/core");
class GithubApiService {
    constructor(token, owner, repo) {
        this.token = token;
        this.owner = owner;
        this.repo = repo;
        this.client = new core_1.Octokit({ auth: this.token });
    }
    async postCommentAnswer(answer, issueId) {
        await this.client.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
            owner: this.owner,
            repo: this.repo,
            issue_number: issueId,
            body: answer,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    }
}
exports.GithubApiService = GithubApiService;
