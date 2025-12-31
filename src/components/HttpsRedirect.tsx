import { useEffect } from 'react';

const RedirectHandler = () => {
    useEffect(() => {
        // This component serves as a client-side fallback for development 
        // or environments where server-side redirects (.htaccess) might not work.

        const currentUrl = window.location.href;
        const currentHost = window.location.host;
        const currentProtocol = window.location.protocol;
        const currentPath = window.location.pathname + window.location.search + window.location.hash;

        // Skip all logic if running on localhost
        if (currentHost.includes('localhost') || currentHost.includes('127.0.0.1')) {
            return;
        }

        let shouldRedirect = false;
        let targetProtocol = currentProtocol;
        let targetHost = currentHost;

        // Check if we need to redirect to HTTPS
        if (currentProtocol === 'http:') {
            shouldRedirect = true;
            targetProtocol = 'https:';
        }

        // Check if we need to redirect from www to non-www
        if (currentHost.startsWith('www.')) {
            shouldRedirect = true;
            targetHost = currentHost.replace(/^www\./, '');
        }

        // Perform redirect if needed
        if (shouldRedirect) {
            const newUrl = `${targetProtocol}//${targetHost}${currentPath}`;
            console.log(`[RedirectHandler] Redirecting from ${currentUrl} to ${newUrl}`);
            window.location.replace(newUrl);
        }
    }, []);

    return null;
};

export default RedirectHandler;
