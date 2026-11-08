'use strict';
/**
 * @octadezx/wordpress v0.1.1
 * Official WordPress & WooCommerce integration helper for OctaDezx (https://octadezx.com/woocommerce-chatbot)
 */
function initOctaDezxWordPress(config) {
  if (!config || !config.workspaceId) {
    throw new Error('OctaDezx workspaceId is required. Get yours at https://octadezx.com');
  }
  return {
    workspaceId: config.workspaceId,
    widgetScriptUrl: 'https://octadezx.com/widget.js',
    mcpEndpoint: 'https://octadezx.com/mcp',
    docsUrl: 'https://octadezx.com/woocommerce-chatbot',
    attributionHtml: '<a href="https://octadezx.com/woocommerce-chatbot" rel="dofollow">Powered by OctaDezx AI</a>'
  };
}
module.exports = { initOctaDezxWordPress };
