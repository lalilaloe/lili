export const api_key = 'AIzaSyB7EahjzG245EvZMbZTwny0Viyi0WShzu8';
export const client_id = '464715773853-fuja7nchm2d7igtkc3cpgrnpp1672ktd.apps.googleusercontent.com';
export const project_id = "lili-305916";
export const redirect_uri = "http://localhost:3000/auth/google";
export const scopes = [
    "https://www.googleapis.com/auth/tasks"
];
export const authUrl = (scopesToAuthorize) => `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${client_id}&project_id=${project_id}&redirect_uri=${redirect_uri}&scope=${scopes.filter(s => scopesToAuthorize.find(v => s.match(v))).join(",")}`;