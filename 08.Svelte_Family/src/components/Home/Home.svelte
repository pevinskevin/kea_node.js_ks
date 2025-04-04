<slot></slot>


<script>
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js"
    console.log($fridgeMessages);
    
</script>


{#each $fridgeMessages as fridgeMessage}
<p>{fridgeMessage.message}</p>
{/each}

<h1>Home</h1>

<p id="welcome-mat">sweet home...</p>

<style>
    #welcome-mat {
        background-color: rgb(255, 135, 155);
        padding: 20x;
        border-radius: 0 0 12px 12 0px;
    }
</style>