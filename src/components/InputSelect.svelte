<script>
    // import 'bootstrap/dist/css/bootstrap.min.css';

    export let btnStyle = "btn-primary"

    let clicks = 0;
    const counter = () => {
        clicks = clicks + 1
    }
</script>

<button class="btn {btnStyle}" on:click={counter}>Clicked {clicks} times</button>