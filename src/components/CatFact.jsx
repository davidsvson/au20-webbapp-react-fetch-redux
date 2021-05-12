import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/catFact";


const CatFact = () => {
    const status = useSelector(state => state.catFact.status);
    const fact = useSelector(state => state.catFact.fact);
    
    const dispatch = useDispatch();
    let content = null;
    if (status === STATUS.NORMAL) {
        content = 'Redo för lite fakta!';
    } else  if ( status === STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    } else if ( status === STATUS.SUCCESS) {
        content = fact;
    } else {
        content = "Kunde inte hämta fakta";
    }

    useEffect(() => {
        fetchFact(dispatch);
    }, [dispatch]) 

    return (
        <div>
            <p>
                <button onClick={() => fetchFact(dispatch)}>Get fact!</button>
            </p>
            {content}
        </div>
    )

}

async function fetchFact(dispatch) {
    dispatch(actions.isFetching());

    const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data: ', json);
        let fact = json.text;
        dispatch(actions.success(fact));
    } catch {
        dispatch(actions.failure());
    }
}

export default CatFact;