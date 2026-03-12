"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
const n8n_workflow_1 = require("n8n-workflow");
async function create() {
    const items = this.getInputData();
    const returnData = [];
    for (let i = 0; i < items.length; i++) {
        try {
            const folderName = this.getNodeParameter('folderName', i);
            const parentId = this.getNodeParameter('parentId', i, '');
            const body = {
                data: {
                    attributes: {
                        name: folderName
                    },
                    type: 'files'
                }
            };
            if (parentId) {
                body.data.attributes.parent_id = parentId;
            }
            const response = await this.helpers.requestOAuth2.call(this, 'zohoWorkDriveOAuth2Api', {
                method: 'POST',
                url: 'https://workdrive.zoho.com/api/v1/files',
                body,
                json: true
            });
            returnData.push({
                json: response
            });
        }
        catch (error) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
    return returnData;
}
