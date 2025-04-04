<script>
	import FirstMessage from "./FirstMessage.svelte";

    const messages = [];

    let messageInput = "";

    function addMessage(){
        messages.push(messageInput);
    }
</script>

<h1>Messages</h1>

<p>{messages}</p>

<input bind:value={messageInput} type="text">

<button>Submit message</button>

<FirstMessage theFirstMessage="test message"></FirstMessage>