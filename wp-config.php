<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'brief-wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NveTIn{^E)0tpARegNWj]ZbZKbfbwreBmz&ivb7weK u`8QWL?MZ)rVG -|P-{v+');
define('SECURE_AUTH_KEY',  't% Vs-zz>r|8;da!ws!>iYkAJ)ea>WK-bs6|zW1lt/j.bY9uE++#,g4=O5>)8!j2');
define('LOGGED_IN_KEY',    'f&7t4;9|!;~&_qL e?xl6&xUi`6j*3iAKR*n[CK|LG}Z1_jVaISKYEJXd/E!k<69');
define('NONCE_KEY',        ',J&C?.gB<`L]t[g+[MZ:xFl_ckr0Y,Bm/1!m++rB~:5)4/2lJyKV]kl3nF*#{%xw');
define('AUTH_SALT',        '[W%?W efaq+LN}~,/mW}s&u(8+vAve-dsF43Ou-OJu.KWU:^9FQE(myVMjr2m^}s');
define('SECURE_AUTH_SALT', '%P>fHY:f:ImFK+HXNA&Y>>)F6S$g=[(UQOP3BXFO.h&I2-Ts>uMS6A=d<~&@%n=y');
define('LOGGED_IN_SALT',   '{qkXP;2iXGaK|x#nZyf%],Cu*?eqnzxTNqQ8L[c0b-i>< 0_K&[1vEdDJW]b0VGf');
define('NONCE_SALT',       '~mE!#++ 1z907IGE|L3SJfkM+V9$7+pP/<zsJdP~5Trsh>SKqe`=v3o.B{.L8J?R');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}


/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define( 'WPLANG', 'fr_FR' );
