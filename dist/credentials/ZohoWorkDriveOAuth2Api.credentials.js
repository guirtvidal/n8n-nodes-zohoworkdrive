"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoWorkDriveOAuth2Api = void 0;
class ZohoWorkDriveOAuth2Api {
    constructor() {
        this.name = 'zohoWorkDriveOAuth2Api';
        this.displayName = 'Zoho WorkDrive OAuth2 API';
        this.extends = ['oAuth2Api'];
        this.documentationUrl = 'https://workdrive.zoho.com/apidocs';
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
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Client Secret',
                name: 'clientSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'string',
                default: 'WorkDrive.team.CREATE,WorkDrive.team.READ,WorkDrive.team.UPDATE,WorkDrive.team.DELETE,WorkDrive.teamfolders.CREATE,WorkDrive.teamfolders.READ,WorkDrive.teamfolders.UPDATE,WorkDrive.teamfolders.DELETE,WorkDrive.files.CREATE,WorkDrive.files.READ,WorkDrive.files.UPDATE,WorkDrive.files.DELETE',
                description: 'Scopes for Zoho WorkDrive API',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'string',
                default: 'access_type=offline&prompt=consent',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'body',
            },
        ];
    }
}
exports.ZohoWorkDriveOAuth2Api = ZohoWorkDriveOAuth2Api;
