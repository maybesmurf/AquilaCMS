/*
 * Product    : AQUILA-CMS
 * Author     : Nextsourcia - contact@aquila-cms.com
 * Copyright  : 2021 © Nextsourcia - All rights reserved.
 * License    : Open Software License (OSL 3.0) - https://opensource.org/licenses/OSL-3.0
 * Disclaimer : Do not edit or add to this file if you wish to upgrade AQUILA CMS to newer versions in the future.
 */

const mongoose         = require('mongoose');
const {FamiliesSchema} = require('../schemas');
const aquilaEvents     = require('../../utils/aquilaEvents');

aquilaEvents.emit('familiesSchemaInit', FamiliesSchema);

module.exports = mongoose.model('families', FamiliesSchema);
