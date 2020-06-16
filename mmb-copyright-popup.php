<?php
/**
 * Plugin Name:       Mmb Copyright Popup
 * Plugin URI:        https://github.com/riverswan/mamabook_copyright_popup
 * Description:       Copyright popup
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Pavel Riverswan
 * Author URI:        https://github.com/riverswan
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       penci-28-fix
 * Domain Path:       /languages
 */


add_action('wp_enqueue_scripts', 'mmb_copyright_popup');

if (!function_exists('mmb_copyright_popup')) {
	function mmb_copyright_popup() {
		if (!is_user_logged_in()) {
			wp_enqueue_script('copyright_popup', plugin_dir_url(__FILE__) . 'mmb-copyright-popup.js', '', '', true);
		}
	}

}