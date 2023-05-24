import * as core from "@actions/core";
import * as github from "@actions/github";
import {GithubApiService} from "./GithubApiService";
import {ChatGPTApiService} from "./ChatGPTApiService";
import {GithubEventHelper} from "./GithubEventHelper";

export async function run(): Promise<void> {
    const openaiKey = core.getInput('openai-key');
    const openaiModel = core.getInput('openai-model');
    const githubToken = core.getInput('github-token');
    const eventName =  core.getInput('event-name');
    const event = JSON.parse(core.getInput('event'));

    const githubEventHelper = new GithubEventHelper(
        eventName, 
        event
    );

    if(!githubEventHelper.shouldHandle) {
        return;
    }

    const chatGPTApiService = new ChatGPTApiService(openaiKey, openaiModel);
    const answer = await chatGPTApiService.getAnswer(githubEventHelper.getQuestion());

    const githubAPIService = new GithubApiService(
        githubToken, 
        github.context.repo.owner, 
        github.context.repo.repo
    );
    githubAPIService.postCommentAnswer(answer, github.context.issue.number)
}

run();