<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Create Block With Tailwind – hello from a dynamic block!', 'create-block-with-tailwind' ); ?>
</p>
