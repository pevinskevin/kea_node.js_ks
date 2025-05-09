<script>

    import {onMount} from 'svelte';
    import {BASE_URL} from '../../stores/generalStore.js'

    let employees = $state([]);

    console.log(import.meta.env.VITE_BASE_URL);
    

    // We use onMount because otherwise the fetch would consume a LOT of memory due to ??
    onMount(()=>{
        fetch($BASE_URL+"/employees")
    .then((response)=>response.json())
    .then((result)=>{
        employees = result.data;
    });
    });

</script>

<h3>Employees available</h3>
{#each employees as employee}
    <h4>{employee}</h4>
{/each}
