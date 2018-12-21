import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel: number;
    onDecrement: (args:number) => void;
    onIncrement: (args:number) => void;
}

interface State {
    currentEnthusiasm: number;
}


export default class Hello extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        console.log("props", props.enthusiasmLevel)
    }

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        const { name, enthusiasmLevel } = this.props;


        return (
            <div className="hello">
                <div className="greeting">
                    Hello {enthusiasmLevel < 1 ? name: name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    Current enthusiasmLevel {enthusiasmLevel}
                </div>
                <button onClick={() => {this.props.onDecrement(enthusiasmLevel)}}> - </button>
                <button onClick={() => {this.props.onIncrement(enthusiasmLevel)}}> + </button>
            </div>
        );
    }
}
