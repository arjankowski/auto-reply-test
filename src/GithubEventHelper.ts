export class GithubEventHelper {
    constructor(
        public readonly eventName: string,
        public readonly event: any
    ){}

    get shouldHandle(): boolean {
        return ['issue_comment', 'issues'].includes(this.eventName);
    }

    getQuestion(): string {
        if (this.eventName === 'issues') {
            return this.event.issue.body;
        } else if (this.eventName === 'issue_comment') {
            return this. event.comment.body;
        }

        return '';
    }
}