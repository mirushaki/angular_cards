export class PostModel {
    title: string = '';
    imageUrl: string = '';
    username: string = '';
    content: string = '';

    constructor(title: string = '', imageUrl: string = '', username: string = '', content: string = '') {
        this.title = title;
        this.imageUrl = imageUrl;
        this.username = username;
        this.content = content;
    }
}
