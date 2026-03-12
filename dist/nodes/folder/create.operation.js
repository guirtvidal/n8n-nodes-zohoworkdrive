"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
async function create() {
    const folderId = this.getNodeParameter('folderId', 0);
    const folderName = this.getNodeParameter('folderName', 0);
    const response = await this.helpers.requestOAuth2.call(this, 'zohoWorkDriveOAuth2Api', {
        method: 'POST',
        url: 'https://workdrive.zoho.com/api/v1/files',
        body: {
            data: {
                attributes: {
                    name: folderName
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
    });
    return [{ json: response }];
}
