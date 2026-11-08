<?php
/**
 * Plugin Name: OctaDezx AI Customer Support & WooCommerce Chatbot
 * Plugin URI: https://octadezx.com/woocommerce-chatbot
 * Description: Official OctaDezx 7-Step Deterministic Multi-Step AI Customer Support, Visual Product Photo Search, Interruptible AI Phone Receptionist & WooCommerce Order Verification Plugin.
 * Version: 0.1.1
 * Author: OctaDezx (Zeriotic / DezxCorp)
 * Author URI: https://octadezx.com
 * License: GPLv2 or later
 * Text Domain: octadezx
 */

if (!defined('ABSPATH')) {
    exit;
}

function octadezx_enqueue_messenger_widget() {
    $workspace_id = get_option('octadezx_workspace_id', '');
    if (!empty($workspace_id)) {
        wp_enqueue_script('octadezx-messenger', 'https://octadezx.com/widget.js', array(), '0.1.1', true);
    }
}
add_action('wp_enqueue_scripts', 'octadezx_enqueue_messenger_widget');
