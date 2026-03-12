"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoWorkDrive = void 0;
const folderGetAll = __importStar(require("./folder/getAll.operation"));
const folderCreate = __importStar(require("./folder/create.operation"));
const fileGetAll = __importStar(require("./file/getAll.operation"));
const fileUpload = __importStar(require("./file/upload.operation"));
const FolderDescription_1 = require("./FolderDescription");
const FileDescription_1 = require("./FileDescription");
class ZohoWorkDrive {
    constructor() {
        this.description = {
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
                ...FolderDescription_1.folderOperations,
                ...FolderDescription_1.folderFields,
                ...FileDescription_1.fileOperations,
                ...FileDescription_1.fileFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
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
exports.ZohoWorkDrive = ZohoWorkDrive;
