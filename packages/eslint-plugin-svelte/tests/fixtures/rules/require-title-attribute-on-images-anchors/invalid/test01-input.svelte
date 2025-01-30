<script>
	let link = '/something';
	let imageUrl = '/path/to/image.jpg';
</script>

<a href="https://example.com">Example</a>
<a href="/internal">Internal Link</a>
<a href={link}>Dynamic Route</a>
<a href="mailto:contact@example.com">Contact Us</a>
<img src="/logo.png" alt="Company Logo" />
<img src={imageUrl} alt="Dynamic Image" />
<img src="hero.jpg" alt="Hero Image" width="100" height="100" />
<a href="/products">
	<img src="product.jpg" alt="Product Image" />
</a>
<a href="/products" title="View Products">
	<img src="product.jpg" alt="Product Image" />
</a>
<a href="/products">
	<img src="product.jpg" alt="Product Image" title="Product Photo" />
</a>
