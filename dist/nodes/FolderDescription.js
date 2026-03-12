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
        displayName: 'Folder ID',
        name: 'folderId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['create']
            }
        }
    },
    {
        displayName: 'Folder Name',
        name: 'folderName',
        type: 'string',
        default: 'New Folder',
        displayOptions: {
            show: {
                operation: ['create']
            }
        }
    }
];
