"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = upload;
async function upload() {
    const binaryPropertyName = this.getNodeParameter('binaryPropertyName', 0);
    const binaryData = this.helpers.assertBinaryData(0, binaryPropertyName);
    const response = await this.helpers.requestOAuth2.call(this, 'zohoWorkDriveOAuth2Api', {
        method: 'POST',
        url: 'https://upload.zoho.com/workdrive/api/v1/upload',
        formData: {
            file: {
                value: Buffer.from(binaryData.data, 'base64'),
                options: {
                    filename: binaryData.fileName
                }
            }
        }
    });
    return [{ json: response }];
}
