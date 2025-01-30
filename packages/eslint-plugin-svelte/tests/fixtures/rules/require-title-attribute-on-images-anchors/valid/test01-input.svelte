<script>
	let link = '/something';
	let imageUrl = '/path/to/image.jpg';
	let title = 'Dynamic Title';
</script>

<a href="https://example.com" title="Visit Example Website">Example</a>
<a href="/internal" title="Go to Internal Page">Internal Link</a>
<a href={link} title="Dynamic Link">Dynamic Route</a>
<a href="mailto:contact@example.com" title="Send us an email">Contact Us</a>

<img src="/logo.png" alt="Company Logo" title="Company Brand Logo" />
<img src={imageUrl} alt="Dynamic Image" {title} />
<img src="hero.jpg" alt="Hero Image" title="Welcome to our site" width="100" height="100" />

<a href="/products" title="View all products">
	<img src="product.jpg" alt="Product Image" title="Featured Product" />
</a>

<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" title="Some title">link</a>
<a href="/foo" title="some title">link</a>
<a href="/foo" target="_blank" rel="noopener noreferrer" title="some title">link</a>
<a href="foo/bar" title="some title">link</a>
<a href="foo/bar" target="_blank" rel="neoprene noreferrer" title="some title">link</a>
<a href={link} target="_blank" title="some title">link</a>
<a href={link} title="some title">link</a>
<a href="mailto:privacy@secureship.ca" title="some title">privacy@secureship.ca</a>
<p>
	Anyone may contact us at
	<a href="mailto:privacy@secureship.ca" title="some title">privacy@secureship.ca</a>
	to request access to or the correction or update of their personal information.
</p>
