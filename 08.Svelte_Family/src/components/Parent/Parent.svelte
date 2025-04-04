<script>

    import Child from "../Child/Child.svelte"

    const { name: parentName, children } = $props()

    function handleShowLove(childName){
        console.log(`${childName} loves ${parentName} very much!`);
    }
    console.log(parentName, children);

    const cookieJar = $state(["🍪", "🍪", "🍪", "🍪"])

    function handleEatCookie(childName){
        if (cookieJar.length === 0){
            console.log("No more cookies left");
            return;
        }
        cookieJar.pop();
        console.log(`${childName} ate a Cookie! 🍪`);
    }
    
</script>

<h1>{parentName}</h1>
<p>
{#each cookieJar as cookie}
{cookie}
{/each}
</p>


{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} />
{/each}