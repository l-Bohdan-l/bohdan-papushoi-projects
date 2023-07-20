import { fetchMovieCast } from "../../../services/fetchMovies";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import Status from "../../../Constants";
import avatarPlaceholder from '../../../images/avatar_placeholder.png'
import { ColorRing } from 'react-loader-spinner';
import { CastList, CastListItem, CastNameWrapper, CastCharacterWrapper, CastImage} from "./Cast.styled";

function Cast() { 
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(movieId);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        setStatus(Status.PENDING);
        fetchMovieCast(id)
            .then(setCast)
            .catch(error => setError(error))
            .finally(() => setStatus(Status.RESOLVED));
    }, [id]);
    // console.log('cast', cast)
    return (
        <div>
            {status === Status.PENDING && <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{
                    display: 'block',
                    margin: '0 auto',
                }}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />}
            {status === Status.RESOLVED && cast && (
                <CastList>
                    {cast.map(actor => (
                        <CastListItem key={actor.id}>
                            <CastImage src={
                                actor.profile_path ? 
                                `https://image.tmdb.org/t/p/w500${actor.profile_path}` : avatarPlaceholder
                            } alt={actor.name} />
                            <CastNameWrapper>
                                <p>{actor.name}</p>
                                <p><CastCharacterWrapper>Character:</CastCharacterWrapper> {actor.character}</p>
                            </CastNameWrapper>
                        </CastListItem>
                    )
                    )}
                </CastList>
            )}
            {status === Status.REJECTED && <h1>{error.message}</h1>}
        </div>
    );
};

export default Cast;