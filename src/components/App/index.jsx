import { useState } from 'react';
import 'components/App/App.css';
import Button from 'components/Button';

function App() {
    const [count, setCount] = useState(0)

    const plus = () => { //можно через постоянную - записи эквивалентны
        setCount(count + 1)
        //count = count + 1 - НЕ СРАБОТАЕТ. ОБЯЗАТЕЛЬНО ДЕЛАЕМ ЧЕРЕЗ setCount
    }

    function minus() { //можно через функцию - записи эквивалентны
        setCount(count - 1)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-24">СЧЁТЧИК</h1>
            <p className="text-8xl font-bold text-center mt-10">{count}</p>
            <div className="flex justify-center mt-12">
                <Button title="отнять -1" changeCount={minus} />
                <Button title="прибавить +1" changeCount={plus} />
            </div>
            
        </div>
    );
}

export default App;
