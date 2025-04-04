<script>

    const { name, isGirl, familySheep, onShowLove, onEatCookie} = $props();

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    console.log(name, isGirl, familySheep);

    let fridgeMessageInput = $state("")

    function writeMessageOnFridge(){
        console.log(fridgeMessageInput);
        fridgeMessages.set(
            [
            ...$fridgeMessages, {
            message:fridgeMessageInput
                }
            ]
        );
    }

    
</script>

<div 
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}
>
    
    <h2>{name} {isGirl} {familySheep}</h2>

    <button onclick={() => onShowLove(name)}
    >Show love</button>
    <button onclick={() => onEatCookie(name)}
    >Eat cookie</button>

    <input bind:value={fridgeMessageInput}>
    <button onclick="{writeMessageOnFridge}">Write message on fridge.</button>

</div>


<style>
    .is-girl{
        background-color: chartreuse;
    }

    .is-boy{
        background-color: salmon;
    }

    .not-a-sheep{
        border: 0.5px solid goldenrod;
    }

    .grey-sheep{
        border: 0.5em  solid pink
    }

    .black-sheep{
        border: 0.5em solid purple
    }
</style>