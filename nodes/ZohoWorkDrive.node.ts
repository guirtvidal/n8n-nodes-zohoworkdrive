import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as folderGetAll from './folder/getAll.operation';
import * as folderCreate from './folder/create.operation';

import * as fileGetAll from './file/getAll.operation';
import * as fileUpload from './file/upload.operation';

import { folderOperations, folderFields } from './FolderDescription';
import { fileOperations, fileFields } from './FileDescription';

export class ZohoWorkDrive implements INodeType {

	description: INodeTypeDescription = {

		displayName: 'Zoho WorkDrive',
		name: 'zohoWorkDrive',
		icon: 'file:zohoworkdrive.png',
		group: ['transform'],
		version: 1,

		description: 'Interact with Zoho WorkDrive API',

		defaults: {
			name: 'Zoho WorkDrive',
		},

		inputs: ['main'],
		outputs: ['main'],

		credentials: [
			{
				name: 'zohoWorkDriveOAuth2Api',
				required: true,
			},
		],

		properties: [

			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Folder',
						value: 'folder',
					},
					{
						name: 'File',
						value: 'file',
					},
				],
				default: 'folder',
			},

			...folderOperations,
			...folderFields,

			...fileOperations,
			...fileFields,

		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {

			if (resource === 'folder') {

				if (operation === 'getAll') {

					const response = await folderGetAll.getAll.call(this);

					returnData.push(...response);

				}

				if (operation === 'create') {

					const response = await folderCreate.create.call(this);

					returnData.push(...response);

				}

			}

			if (resource === 'file') {

				if (operation === 'getAll') {

					const response = await fileGetAll.getAll.call(this);

					returnData.push(...response);

				}

				if (operation === 'upload') {

					const response = await fileUpload.upload.call(this);

					returnData.push(...response);

				}

			}

		}

		return [returnData];
	}
}