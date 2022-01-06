'use strict';

/**
 * notify-email router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::notify-email.notify-email');
