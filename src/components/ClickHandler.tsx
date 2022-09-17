import { Component, ReactNode } from "react";

export class ClickHandler extends Component<any, any> {

    contHandler(){
        console.log('this',this);
    }

    render(): ReactNode {

        return (
            <div>
                <button onClick={this.contHandler}>
                    Bind this
                </button>
            </div>
        );
    }
}