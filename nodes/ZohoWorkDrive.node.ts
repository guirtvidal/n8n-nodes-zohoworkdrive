import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import * as folder from './folder/getAll.operation';
import * as folderCreate from './folder/create.operation';

import * as file from './file/getAll.operation';
import * as fileUpload from './file/upload.operation';

import { folderOperations, folderFields } from './FolderDescription';
import { fileOperations, fileFields } from './FileDescription';

export class ZohoWorkDrive implements INodeType {

	description: INodeTypeDescription = {

		displayName: 'Zoho WorkDrive',
		name: 'zohoWorkDrive',
		icon: 'file:ZohoWorkDrive.png',
		group: ['transform'],
		version: 1,

		description: 'Interact with Zoho WorkDrive API',

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
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{ name: 'Folder', value: 'folder' },
					{ name: 'File', value: 'file' }
				],
				default: 'folder'
			},

			...folderOperations,
			...folderFields,

			...fileOperations,
			...fileFields

		]

	};

	async execute() {

		const items = this.getInputData();
		const returnData = [];

		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		if (resource === 'folder') {

			if (operation === 'getAll') {
				returnData.push(...await folder.getAll.call(this));
			}

			if (operation === 'create') {
				returnData.push(...await folderCreate.create.call(this));
			}

		}

		if (resource === 'file') {

			if (operation === 'getAll') {
				returnData.push(...await file.getAll.call(this));
			}

			if (operation === 'upload') {
				returnData.push(...await fileUpload.upload.call(this));
			}

		}

		return [returnData];

	}
}