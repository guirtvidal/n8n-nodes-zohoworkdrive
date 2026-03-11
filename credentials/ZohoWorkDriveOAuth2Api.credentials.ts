import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZohoWorkDriveOAuth2Api implements ICredentialType {

	name = 'zohoWorkDriveOAuth2Api';

	displayName = 'Zoho WorkDrive OAuth2 API';

	extends = ['oAuth2Api'];

	documentationUrl = 'https://workdrive.zoho.com/apidocs';

	properties: INodeProperties[] = [

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