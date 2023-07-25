<script lang="ts">
	// NOTE: for tailwind
	import '../app.css';
	// NOTE: for fonts
	import '../styles/app.css'

	import type {Links} from '$lib/types'
	
	const routes: Links = [
		{text: 'projects', href: '/projects'},
		{text: 'publications', href: '/publications'},
		{text: 'members', href: '/members'},	
	]

	import Navigation from "$lib/Layout/Navigation.svelte";
	import Footer from "$lib/Layout/Footer.svelte";
	
</script>

<Navigation {routes} />

<div class="min-h-screen flex flex-col">
	<slot></slot>
	<div class="flex-1 py-8"></div>	
	<Footer/>
</div>
