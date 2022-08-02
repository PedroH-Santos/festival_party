import { Connection, createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

// getConnectionOptions().then(options => {
//     const newOptions = options as IOptions;
//     newOptions.host = 'database_festival';
//     createConnection({
//         ...options,
//     });
// });



export default async(host = "database_festival"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    
    return createConnection(
        Object.assign(defaultOptions, {
            host:  host,
        })

    )
}