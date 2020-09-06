export const dbconfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'people',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { 
                    name: 'name', 
                    keypath: 'name', 
                    options: { 
                        unique: false 
                    } 
                },
                { 
                    name: 'address', 
                    keypath: 'address', 
                    options: { 
                        unique: false 
                    } 
                }
            ]
        }
    ]
}