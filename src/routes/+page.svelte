<svelte:head>
    <title>SVUI</title> 
</svelte:head>

<script lang="ts">
    import Header from '$components/layout/Header.svelte'
    import Nav from '$components/layout/Nav.svelte'
    import Container from '$components/layout/Container.svelte'
    import MainContents from '$components/layout/MainContents.svelte'
</script>

<Header />

<Container>
    <Nav/>
    <MainContents>
        <div></div>
    </MainContents>
</Container>


<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->