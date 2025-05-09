<script>
import {Router, Link, Route} from 'svelte-routing';
	import Pharmacy from './pages/Pharmacy/Pharmacy.svelte';
	import Home from './pages/Home/Home.svelte';
	import About from './pages/About/About.svelte';
	import Employees from './pages/Employees/Employees.svelte';
</script>
    
<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/pharmacy'>Pharmany</Link>
        <Link to='/about'>About</Link>
        <Link to='/employees'>Employees</Link>
    </nav>

    <div>

        <Route path="/">
            <Home>

            </Home>
        </Route>

        <Route path="/pharmacy">
            <Pharmacy>

            </Pharmacy>
        </Route>

        <Route path="/about">
            <About>

            </About>
        </Route>

        <Route>
            <Employees>

            </Employees>
        </Route>

    </div>
</Router>