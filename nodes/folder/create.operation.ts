import {
	IExecuteFunctions,
	INodeExecutionData,
	NodeApiError
} from 'n8n-workflow';

export async function create(this: IExecuteFunctions): Promise<INodeExecutionData[]> {

	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {

		try {

			const folderName = this.getNodeParameter('folderName', i) as string;
			const parentId = this.getNodeParameter('parentId', i, '') as string;

			const body: any = {
				data: {
					attributes: {
						name: folderName
					},
					type: 'files'
				}
			};

			if (parentId) {
				body.data.attributes.parent_id = parentId;
			}

			const response = await this.helpers.requestOAuth2.call(
				this,
				'zohoWorkDriveOAuth2Api',
				{
					method: 'POST',
					url: 'https://workdrive.zoho.com/api/v1/files',
					body,
					json: true
				}
			);

			returnData.push({
				json: response
			});

		} catch (error) {

			throw new NodeApiError(this.getNode(), error);

		}

	}

	return returnData;

}