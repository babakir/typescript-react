import { Component, ReactNode } from 'react'

// const HookCounter = () => {

//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={setCount.bind(this, count + 1)}>Add One</button>
//         </div>
//     );

// }

class HookCounter extends Component<any, any> {

    state: Readonly<any> = {
        count: 0
    };

    addCount(): void {
        console.log('addCount');
        for (let i = 0; i < 5; i++) {
            console.log(i);
            this.setState((preventState: any) => {
                return { count: preventState.count + 1 }
            });
        }
    }

    render(): ReactNode {
        return (
            <div>
                <h2>Count : {this.state.count}</h2>
                <button onClick={this.addCount.bind(this)}>Add One</button>
            </div>
        );
    }
}

export default HookCounter;