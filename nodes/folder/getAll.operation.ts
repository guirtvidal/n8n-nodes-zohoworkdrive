import {
	IExecuteFunctions,
	INodeExecutionData,
	NodeApiError
} from 'n8n-workflow';

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {

	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {

		try {

			const teamFolderId = this.getNodeParameter('teamFolderId', i) as string;

			const response = await this.helpers.requestOAuth2.call(
				this,
				'zohoWorkDriveOAuth2Api',
				{
					method: 'GET',
					url: `https://workdrive.zoho.com/api/v1/teamfolders/${teamFolderId}/folders`,
					json: true
				}
			);

			if (Array.isArray(response.data)) {

				for (const folder of response.data) {

					returnData.push({
						json: folder
					});

				}

			}

		} catch (error) {

			throw new NodeApiError(this.getNode(), error);

		}

	}

	return returnData;

}