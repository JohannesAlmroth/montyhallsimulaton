import { PickRequest } from './models/Pick';

export const getPick = async function(payload: PickRequest) {
    try {
        const res = await fetch('https://localhost:5001/api/pick/one', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        return await res.json();
    } catch (e) {
        console.log('error', e);
        throw new Error(`Error occured when fetching data ${e}`);
    }
}