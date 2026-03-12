"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderFields = exports.folderOperations = void 0;
exports.folderOperations = [
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
exports.folderFields = [
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
