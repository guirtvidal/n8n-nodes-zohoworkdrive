import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZohoWorkDriveOAuth2Api implements ICredentialType {

	name = 'zohoWorkDriveOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Zoho WorkDrive OAuth2 API';

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
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'WorkDrive.files.ALL',
		}
	];
}