export const Singleton = (function() {
    let instance;

    function createInstance() {
        // Private methods and properties
        const privateMethod = () => {
        console.log('This is a private method');
        };

        const privateProperty = 'This is a private property';

        return {
        // Public methods and properties
        publicMethod: () => {
            console.log('This is a public method');
        },
        publicProperty: 'This is a public property',
        getPrivateProperty: () => privateProperty,
        };
    }

    return {
        getInstance: function() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
        },
    };
})();