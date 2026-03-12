import { INodeProperties } from 'n8n-workflow';

export const folderOperations: INodeProperties[] = [

{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	displayOptions: {
		show: {
			resource: ['folder']
		}
	},
	options: [
		{
			name: 'Get All Folders',
			value: 'getAll'
		},
		{
			name: 'Create Folder',
			value: 'create'
		}
	],
	default: 'getAll'
}

];

export const folderFields: INodeProperties[] = [

{
	displayName: 'Folder Name',
	name: 'folderName',
	type: 'string',
	default: '',
	required: true
},
{
	displayName: 'Parent Folder ID',
	name: 'parentId',
	type: 'string',
	default: '',
	description: 'Opcional. ID Folder Master'
}

];