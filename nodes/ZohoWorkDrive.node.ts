import { IExecuteFunctions } from 'n8n-workflow';
import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription
} from 'n8n-workflow';

export class ZohoWorkDrive implements INodeType {

	description: INodeTypeDescription = {
		displayName: 'Zoho WorkDrive',
		name: 'zohoWorkDrive',
		icon: 'file:ZohoWorkDrive.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with Zoho WorkDrive',
		defaults: {
			name: 'Zoho WorkDrive'
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'zohoWorkDriveOAuth2Api',
				required: true
			}
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				options: [
					{ name: 'List Files', value: 'list' },
					{ name: 'Create Folder', value: 'createFolder' },
					{ name: 'Upload File', value: 'upload' }
				],
				default: 'list'
			},
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				default: ''
			},
			{
				displayName: 'Binary Property',
				name: 'binaryPropertyName',
				type: 'string',
				default: 'data',
				displayOptions: {
					show: {
						operation: ['upload']
					}
				}
			}
		]
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < items.length; i++) {

			if (operation === 'list') {

				const response = await this.helpers.requestOAuth2.call(
					this,
					'zohoWorkDriveOAuth2Api',
					{
						method: 'GET',
						url: 'https://workdrive.zoho.com/api/v1/files'
					}
				);

				returnData.push({ json: response as IDataObject });
			}

			if (operation === 'createFolder') {

				const folderId = this.getNodeParameter('folderId', i);

				const response = await this.helpers.requestOAuth2.call(
					this,
					'zohoWorkDriveOAuth2Api',
					{
						method: 'POST',
						url: 'https://workdrive.zoho.com/api/v1/files',
						body: {
							data: {
								attributes: {
									name: 'New Folder'
								},
								type: 'files',
								relationships: {
									parent: {
										data: {
											id: folderId,
											type: 'files'
										}
									}
								}
							}
						},
						json: true
					}
				);

				returnData.push({ json: response as IDataObject });
			}

			if (operation === 'upload') {

				const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i);
				const binaryData = this.helpers.assertBinaryData(i, binaryPropertyName);

				const response = await this.helpers.requestOAuth2.call(
					this,
					'zohoWorkDriveOAuth2Api',
					{
						method: 'POST',
						url: 'https://upload.zoho.com/workdrive/api/v1/upload',
						formData: {
							file: {
								value: Buffer.from(binaryData.data, 'base64'),
								options: {
									filename: binaryData.fileName
								}
							}
						}
					}
				);

				returnData.push({ json: response as IDataObject });
			}
		}

		return [returnData];
	}
}