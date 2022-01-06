'use strict';

/**
 * notify-email service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notify-email.notify-email');
