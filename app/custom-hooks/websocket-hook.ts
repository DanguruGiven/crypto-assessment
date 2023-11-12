import { useEffect, useRef, useState } from 'react';

export const useWebsocket = (url: string) => {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [value, setValue] = useState<string | null | object>(null);

    const ws: any = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);
        
        socket.onopen = () => setIsReady(true);
        socket.onclose = () => setIsReady(false);
        socket.onmessage = (event) => {
            const { data } = event;
            setValue(data);
        };

        ws.current = socket;

        return () => {
            socket.close();
        };
    }, []);

    return [isReady, value, ws.current?.send.bind(ws.current)];
}