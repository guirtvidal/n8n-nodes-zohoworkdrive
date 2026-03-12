"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFields = exports.fileOperations = void 0;
exports.fileOperations = [
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
exports.fileFields = [
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
