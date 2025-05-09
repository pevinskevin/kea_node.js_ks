<script>
	import Employees from "../Employees/Employees.svelte";
	import {onMount} from 'svelte'
	import { fetchGet, fetchPost } from "../../util/fetch.js";
	import {BASE_URL} from '../../stores/generalStore.js'

	let pills = [];

	onMount(async()=>{
		pills = (await fetchGet($BASE_URL+"/pills")).data;
	})

	async function fillPrescription(){
		fetchPost($BASE_URL+"/pills", {
			name: "Ibuprofen"
		});
		pills = (await fetchGet($BASE_URL+"/pills")).data
	}
</script>

<h1>Pharmacy</h1>

<Employees>
    
</Employees>

{#each pills as pill}
<h3>{pill.name}</h3>
{/each}


<button onclick={fillPrescription}>Fill prescription</button>