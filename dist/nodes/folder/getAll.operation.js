"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
const n8n_workflow_1 = require("n8n-workflow");
async function getAll() {
    const items = this.getInputData();
    const returnData = [];
    for (let i = 0; i < items.length; i++) {
        try {
            const teamFolderId = this.getNodeParameter('teamFolderId', i);
            const response = await this.helpers.requestOAuth2.call(this, 'zohoWorkDriveOAuth2Api', {
                method: 'GET',
                url: `https://workdrive.zoho.com/api/v1/teamfolders/${teamFolderId}/folders`,
                json: true
            });
            if (Array.isArray(response.data)) {
                for (const folder of response.data) {
                    returnData.push({
                        json: folder
                    });
                }
            }
        }
        catch (error) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
    return returnData;
}
