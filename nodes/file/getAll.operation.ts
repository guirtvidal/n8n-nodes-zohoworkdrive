import { IExecuteFunctions } from 'n8n-workflow';

export async function getAll(this: IExecuteFunctions) {

	const folderId = this.getNodeParameter('folderId', 0);

	const response = await this.helpers.requestOAuth2.call(
		this,
		'zohoWorkDriveOAuth2Api',
		{
			method: 'GET',
			url: `https://workdrive.zoho.com/api/v1/files/${folderId}/files`
		}
	);

	return [{ json: response }];

}