"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoWorkDriveOAuth2Api = void 0;
class ZohoWorkDriveOAuth2Api {
    constructor() {
        this.name = 'zohoWorkDriveOAuth2Api';
        this.extends = ['oAuth2Api'];
        this.displayName = 'Zoho WorkDrive OAuth2 API';
        this.properties = [
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://accounts.zoho.com/oauth/v2/auth',
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://accounts.zoho.com/oauth/v2/token',
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'string',
                default: 'WorkDrive.files.ALL',
            }
        ];
    }
}
exports.ZohoWorkDriveOAuth2Api = ZohoWorkDriveOAuth2Api;
