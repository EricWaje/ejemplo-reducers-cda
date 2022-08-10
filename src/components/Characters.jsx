import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { SET_CHARACTERS, SET_ERROR } from '../actions/charactersActions';
import { charactersReduce, initialState } from '../reducers/charactersReducer';

const styles = {
    containerCharacters: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%',
        height: '30%',
        backgroundColor: '#f5f5f5',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    },
};

const Characters = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [state, dispatch] = useReducer(charactersReduce, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(
                    'https://rickandmortyapi.com/api/character'
                );
                const dataCharacters = await result.json();

                dispatch({
                    type: SET_CHARACTERS,
                    payload: dataCharacters.results,
                });
            } catch (error) {
                dispatch({
                    type: SET_ERROR,
                });
            }
        };
        fetchData();
    }, []);

    if (state.loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div style={{ width: '100%' }}>
                <h1>Characters</h1>

                <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {state.data?.map((character) => (
                        <div
                            key={character.id}
                            style={styles.containerCharacters}
                        >
                            <div>
                                <h2>
                                    {character.name.length > 14
                                        ? `${character.name.substring(
                                              0,
                                              12
                                          )}...`
                                        : character.name}
                                </h2>
                                <p>{character.status}</p>
                                <p>{character.species}</p>
                            </div>
                            <div>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    width="70"
                                    style={{ borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    ))}
                    ;
                </ul>
            </div>
        </div>
    );
};

export default Characters;

/* {
    state.data?.map((character) => (
        <div key={character.id} style={styles.containerCharacters}>
            <div>
                <h2>
                    {character.name.length > 14
                        ? `${character.name.substring(0, 12)}...`
                        : character.name}
                </h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
            </div>
            <div>
                <img
                    src={character.image}
                    alt={character.name}
                    width="70"
                    style={{ borderRadius: '10px' }}
                />
            </div>
        </div>
    ));
} */
