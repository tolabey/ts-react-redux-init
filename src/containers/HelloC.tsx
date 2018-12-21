import Hello from "../components/Hello";
import * as actions from "../Store/actions";
import {StoreState} from "../Store/types";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName,
    }
}


export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
