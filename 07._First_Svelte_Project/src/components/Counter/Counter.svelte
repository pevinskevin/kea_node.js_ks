<script>
    
    let counter = 0;

    function incrementCounter(){
        counter ++;
    }

    function incrementCounterByAmount(amount){
        counter += amount;
    }
</script>

<h3>
    {counter}
</h3>

<button onclick={incrementCounter}>Increment</button>
<button onclick={incrementCounterByAmount(10)}>Increment x10</button>
<button onclick={() => {counter -= 10}}>Decrement x10</button>