"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
async function getAll() {
    const response = await this.helpers.requestOAuth2.call(this, 'zohoWorkDriveOAuth2Api', {
        method: 'GET',
        url: 'https://workdrive.zoho.com/api/v1/teamfolders'
    });
    return [{ json: response }];
}
