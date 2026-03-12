import { INodeProperties } from 'n8n-workflow';

export const fileOperations: INodeProperties[] = [

{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	displayOptions: {
		show: {
			resource: ['file']
		}
	},
	options: [
		{
			name: 'Get All Files',
			value: 'getAll'
		},
		{
			name: 'Upload File',
			value: 'upload'
		}
	],
	default: 'getAll'
}

];

export const fileFields: INodeProperties[] = [

{
	displayName: 'Folder ID',
	name: 'folderId',
	type: 'string',
	default: '',
	displayOptions: {
		show: {
			operation: ['getAll']
		}
	}
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

];