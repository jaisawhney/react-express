import {useQuery} from 'react-query'

export default function RabbitBreeds() {
    const {isLoading, data} = useQuery('rabbits', () => {
        return fetch('/rabbits')
            .then(res => res.json())
    });

    if (isLoading)
        return (
            <div>
                <p>Fetching Data...</p>
            </div>
        )

    return (
        <div>
            {data.map(breed => (<p>{breed}</p>))}
        </div>
    );
}