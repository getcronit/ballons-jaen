import { useEffect, useState } from 'react';

export const useQueryRouter = (
    paramKey: string,
) => {
    const [isCalled, setIsCalled] = useState(false);
    const [paramValue, setParamValue] = useState('');

    useEffect(() => {
        // Function to check the URL query string for the provided key
        function checkQueryKey() {
            const params = new URLSearchParams(window.location.search);
            setIsCalled(params.has(paramKey));
            setParamValue(params.get(paramKey) as string);
        }

        // Check the query key on initial render
        checkQueryKey();

        // Add event listeners for URL change
        window.addEventListener('popstate', checkQueryKey);
        window.addEventListener('hashchange', checkQueryKey);

        // Cleanup function to remove event listeners on unmount
        return () => {
            window.removeEventListener('popstate', checkQueryKey);
            window.removeEventListener('hashchange', checkQueryKey);
        };
    }, []);

    // Return isCalled and kthe value of the param in the URL
    return {
        isCalled,
        paramValue,
    };
}
