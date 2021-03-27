const getUrl = async function(path) {
	return `${publicRuntimeConfig.apiUrl}${path}`;
}

const getData = async function (path, body) {
    let url;
    let res;

    try {
        url = getUrl(path);
        res = await fetch(url, {
					method: 'GET',
					body: JSON.stringify(payload),
					headers: {
							'Content-Type': 'application/json; charset=utf-8'
        }
        });

        const body = await res.json();
        if (res.status >= 200 && res.status < 400) {
            return {
                data: body
            };
        } else {
            return {
                error: {
                    code: res.status.toString(),
                    message: body
                }
            };
        }
    } catch (e) {
        return {
            error: {
                code:'500',
                message: 'Server side error occured'
            }
        };
    }
};

export const getResult = async function(obj) {
	return await getData('/pick', obj);
}