"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubEventHelper = void 0;
class GithubEventHelper {
    constructor(eventName, event) {
        this.eventName = eventName;
        this.event = event;
    }
    get shouldHandle() {
        return ['issue_comment', 'issues'].includes(this.eventName);
    }
    getQuestion() {
        if (this.eventName === 'issues') {
            return this.event.issue.body;
        }
        else if (this.eventName === 'issue_comment') {
            return this.event.comment.body;
        }
        return '';
    }
}
exports.GithubEventHelper = GithubEventHelper;
