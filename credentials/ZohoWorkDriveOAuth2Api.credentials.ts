import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZohoWorkDriveOAuth2Api implements ICredentialType {
	name = 'zohoWorkDriveOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Zoho WorkDrive OAuth2 API';
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
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'WorkDrive.team.CREATE,WorkDrive.team.READ,WorkDrive.team.UPDATE,WorkDrive.team.DELETE,WorkDrive.teamfolders.CREATE,WorkDrive.teamfolders.READ,WorkDrive.teamfolders.UPDATE,WorkDrive.teamfolders.DELETE,WorkDrive.files.CREATE,WorkDrive.files.READ,WorkDrive.files.UPDATE,WorkDrive.files.DELETE',
		},
	];
}